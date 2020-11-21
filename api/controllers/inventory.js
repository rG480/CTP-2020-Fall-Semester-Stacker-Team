const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory,Users } = db;
const passport =  require('../middlewares/authentication');
router.get('/',passport.isAuthenticated(), (req,res) => {
    Inventory.findAll({where:{OwnerId: req["user"].id}, order: [[ 'createdAt' , 'DESC']]})
    .then(inv => res.json(inv));
});
router.get('/:email', (req,res) => {
  Users.findAll({ raw: true,attributes: ['id'],where:{userEmail:req.params.email}}).then( user=>
    Inventory.findAll({where:{OwnerId:user[0].id,public:true}, order: [[ 'createdAt' , 'DESC']]})
    ).then(inv => res.json(inv));

});
router.post('/',passport.isAuthenticated(), (req, res) => {
   
    let  content  = req.body;
  

    Inventory.create({name: content.name,
        quantity: content.quantity,
        dateAdded: content.dateAdded,
       purchasePrice: content.purchasePrice,
       currentPrice: content.currentPrice,
       description: content.description,
       public:content.pub })
      .then(item=>item.setOwner(req.session.user))
      .then(post => {
        res.status(201).json(post);
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


