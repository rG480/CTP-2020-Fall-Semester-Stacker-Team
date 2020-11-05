const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory } = db;

router.get('/', (req,res) => {
    Inventory.findAll({})
    .then(inv => res.json(inv));
});
router.post('/', (req, res) => {
    let  content  = req.body;
    console.log(content)
    Inventory.create({name:content.name,quantity:content.quantity,/*dateAdded:content.dateAdded,*/
       purchasePrice:content.purchasePrice,currentPrice:content.currentPrice,description:content.description })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(403).json(err);
      });
  });
  module.exports = router;


