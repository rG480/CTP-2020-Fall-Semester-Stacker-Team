const express = require('express');
const router = express.Router();
const db = require('../models');

const { Users } = db;



router.get('/', (req,res) => {
        let id = req["user"].id; 
        Users.findAll({where: {id: id}})
        .then(user => res.json(user));
});

module.exports = router;