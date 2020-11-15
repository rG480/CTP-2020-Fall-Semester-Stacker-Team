const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const inventoryController = require('./inventory.js');
const authController = require('./auth.js');
const topPrice = require('./topPrice.js');
const recentAdded = require('./recentAdded.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);
router.use('/inv' , inventoryController);
router.use('/topPrice', topPrice);
router.use('/recentAdded', recentAdded);
module.exports = router;