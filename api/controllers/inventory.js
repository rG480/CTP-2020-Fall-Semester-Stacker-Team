const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory } = db;
const passport =  require('../middlewares/authentication');
router.get('/', (req,res) => {
    console.log(req.session.id);
    console.log(req.session.cookie);
    Inventory.findAll({where:{OwnerId:req.session.user}})
    .then(inv => res.json(inv));
});
router.post('/',passport.isAuthenticated(), (req, res) => {
   
    let  content  = req.body;

    Inventory.create({name: content.name,
        quantity: content.quantity,
        dateAdded: content.dateAdded,
       purchasePrice: content.purchasePrice,
       currentPrice: content.currentPrice,
       description: content.description,
       public:content.public })
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
        res.sendStatus(204);
      });
  });
  module.exports = router;


