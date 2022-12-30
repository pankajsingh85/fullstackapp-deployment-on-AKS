const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Routes
router.post('/getUser',userController.getUser);      
router.post('/addUser',userController.addUser);     
router.post("/checkUser", userController.checkUser);  
    
module.exports = router;    