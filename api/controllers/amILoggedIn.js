const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      if(req["user"]){
        res.status(200)
      }
});


module.exports = router;