const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory,Users } = db;
const passport =  require('../middlewares/authentication');
const multer= require('multer');
const upload = multer();
const img= require('../middlewares/imageHandling').upload;
const del= require('../middlewares/imageHandling').delete;

//get all of user's inventory items regardless of whether they are public or private. this is for their own
//inventory, not a public page.
router.get('/',passport.isAuthenticated(), (req,res) => {
    Inventory.findAll({where:{OwnerId: req["user"].id}, order: [[ 'createdAt' , 'DESC']]})
    .then(inv => res.json(inv));
});

//gets all public flagged items associated with a particular user account
router.get('/:email', (req,res) => {
  //first the email supplied with the request is used to get the user's primary key
  Users.findOne({ raw: true,attributes: ['id'],where:{userEmail:req.params.email}}).then( user=>
    //all the user's public items are then retrieved using this key
    Inventory.findAll({where:{OwnerId:user.id,public:true}, order: [[ 'createdAt' , 'DESC']]})
    ).then(inv => res.json(inv));

});

router.post('/',upload.any(),passport.isAuthenticated(), (req, res) => {
    let itemImage= req.files[0]
    console.log(itemImage)
    let  content  = (JSON.parse(req.body.json));
    let imageURL;
    console.log(req.files);
    console.log(content.name)
    img("/itemImages",itemImage).then(info=>{
      console.log(info);
      Inventory.create({name: content.name,
        category: content.category,
        quantity: content.quantity,
        dateAdded: content.dateAdded,
       purchasePrice: content.purchasePrice,
       currentPrice: content.currentPrice,
       description: content.description,
       imageURL: info.url,
       imageID: info.public_id,
       public:content.pub })  
       .then(item=>item.setOwner(req["user"].id))
       .then(post => {
         res.status(200).json(post);
       })
       .catch(err => {
         res.status(401).json(err);
       }); 
    });
  });

 router.post('/:edit',passport.isAuthenticated(), (req, res) => {
   
    let  content  = req.body;
    
    Inventory.update({ name:content.name,
      category: content.category, 
      quantity:content.quantity,
      dateAdded:content.dateAdded,
      purchasePrice:content.purchasePrice,
      currentPrice:content.currentPrice,
      description:content.description,
      public:content.pub },
    { where: { id: content.id } }
  
  )
  .then(post => {
    res.status(200).json(post);
  })
  .catch(err => {
    res.status(401).json(err);
  });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Inventory.findByPk(id)
      .then(item => {
        if(!item) {
          return res.sendStatus(404);
        }
        else{
          del(item.imageID);
          return item;
        }
       
      }).then(item=>{
        item.destroy();
        res.sendStatus(200);
      });
  });
  module.exports = router;


