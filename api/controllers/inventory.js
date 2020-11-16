const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory } = db;
const passport =  require('../middlewares/authentication');
router.get('/', (req,res) => {
<<<<<<< HEAD
    console.log(req.session.id);
    console.log(req.session.cookie);
    Inventory.findAll({where:{OwnerId:req.session.user}})
=======
    Inventory.findAll({where:{OwnerId: 1}, order: [[ 'createdAt' , 'DESC']]})
>>>>>>> 000fd7b4e3084d966bdd37a453786007248bba11
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
<<<<<<< HEAD
       public:content.public })
      .then(item=>item.setOwner(req.session.user))
=======
       public: content.pub })
      .then(item=>item.setOwner(1))
>>>>>>> 000fd7b4e3084d966bdd37a453786007248bba11
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


