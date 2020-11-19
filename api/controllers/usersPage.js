const express = require('express');
const sq = require('sequelize');
const router = express.Router();
const db = require('../models');
const { Users } = db;
const op = sq.Op;

router.get('/',(req,res) => {
    if(req["user"]){
        Users.findAll({where: {id:{[op.not]:req["user"].id}}})
        .then(user => res.json(user));
    }
    else{
        Users.findAll({})
        .then(user => res.json(user));
    }
});

module.exports = router;