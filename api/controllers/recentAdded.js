const express = require('express');
const router = express.Router();
const db = require('../models');
const sq = require('sequelize');
const { Inventory } = db;
const op = sq.Op;
router.get('/:loggedIn', (req,res) => {
     //convert URL string param into boolean val
     const loggedIn = (req.params.loggedIn==='true');
   
    if (loggedIn ===true) {
        let id = req.session.user; 
        Inventory.findAll({where: {public: true,OwnerId:{[op.not]:id}}, order: [[ 'createdAt' , 'DESC']]})
        .then(inv => res.json(inv));
    } 
    else{
    Inventory.findAll({where: {public: true}, order: [[ 'createdAt' , 'DESC']]})
    .then(inv => res.json(inv));
    }
});
module.exports = router;