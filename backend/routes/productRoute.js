const express = require('express');
const app = express.Router();
const productController= require("../controller/productController.js");

app.post("/create", productController.upload, productController.create);
app.get("/view", productController.findAll);
app.get("/view/:productCode", productController.getPrice);
app.post("/filter", productController.filterPrice);
app.get("/details/:productCode", productController.getDetails);
app.post("/search", productController.search);

//update 
app.get('/edit/:productCode',productController.updateform);           
app.post('/update',productController.upload,productController.updateProduct);
//delete
app.get("/delete/:productCode",productController.deleteProduct)

app.post("/checkProduct",productController.checkProduct);  
module.exports = app;
