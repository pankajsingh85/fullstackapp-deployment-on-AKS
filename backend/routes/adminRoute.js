const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController.js');

// Routes
router.post('/addAdmin',adminController.addAdmin);      
router.post('/getAdmin',adminController.getAdmin);      
    
module.exports = router;    