const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory } = db;

router.get('/', (req,res) => {
<<<<<<< HEAD
    Inventory.findAll({where:{OwnerId: 1}, order: [[ 'createdAt' , 'DESC']]})
=======
    Inventory.findAll({where:{OwnerId:1}})
>>>>>>> f13538d18c6b287f436c730a36a6c266609a00d9
    .then(inv => res.json(inv));
});
router.post('/', (req, res) => {
    let  content  = req.body;
    console.log(content)
    Inventory.create({name: content.name,
        quantity: content.quantity,
        dateAdded: content.dateAdded,
       purchasePrice: content.purchasePrice,
       currentPrice: content.currentPrice,
       description: content.description,
       public: content.pub })
      .then(item=>item.setOwner(1))
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


