const express = require('express');
const router = express.Router();
const serviceController = require('../controller/serviceAbilityController.js');

// Routes
router.post('/addData',serviceController.addData);      
router.get('/getData',serviceController.getData);   
router.post('/checkData',serviceController.checkData);
router.get('/editData/:id',serviceController.updateform);           
router.post('/updateData',serviceController.updateService);
router.get("/deleteData/:id",serviceController.deleteService)      
    
module.exports = router;    