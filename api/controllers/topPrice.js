const express = require('express');
const router = express.Router();
const db = require('../models');
const { Inventory } = db;

router.get('/', (req,res) => {
    Inventory.findAll({where: {public: true}, order: [[ 'currentPrice' , 'DESC']]})
    .then(inv => res.json(inv));
});
module.exports = router;
