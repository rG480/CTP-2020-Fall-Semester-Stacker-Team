const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory,Users } = db;
const passport =  require('../middlewares/authentication');
const multer= require('multer');
const upload = multer();
const img= require('./imgPractice').upload;
router.get('/',passport.isAuthenticated(), (req,res) => {
    Inventory.findAll({where:{OwnerId: req["user"].id}, order: [[ 'createdAt' , 'DESC']]})
    .then(inv => res.json(inv));
});
router.get('/:email', (req,res) => {
  Users.findAll({ raw: true,attributes: ['id'],where:{userEmail:req.params.email}}).then( user=>
    Inventory.findAll({where:{OwnerId:user[0].id,public:true}, order: [[ 'createdAt' , 'DESC']]})
    ).then(inv => res.json(inv));

});

const submit = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'json', maxCount: 1 }])


router.post('/',upload.any(),passport.isAuthenticated(), (req, res) => {
    let itemImage= req.files[0]
    console.log(itemImage)
    let  content  = (JSON.parse(req.body.json));
    let imageURL;
    console.log(req.files);
    console.log(content.name)
    img("/itemImages",itemImage).then(
      ans=>{  return ans.url}
    ).then(url=>{
      console.log("hello");
      Inventory.create({name: content.name,
        category: content.category,
        quantity: content.quantity,
        dateAdded: content.dateAdded,
       purchasePrice: content.purchasePrice,
       currentPrice: content.currentPrice,
       description: content.description,
       imageURL: url,
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
  
        item.destroy();
        res.sendStatus(200);
      });
  });
  module.exports = router;


