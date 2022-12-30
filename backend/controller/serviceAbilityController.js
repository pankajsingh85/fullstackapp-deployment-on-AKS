const mysql = require('mysql2');
const db = require("../config/db.config.js");
const Service = db.service;

exports.addData = (req, res) => {
    Service.create({
        pinCode:req.body.pinCode,
        productCode: req.body.productCode,
        quantity:req.body.quantity
    })
        .then(function (dataa) { 
            res.json(dataa)
        })
        .catch(function (err) {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Teacher."
              });
        });
};

exports.getData = (req, res) => {
    Service.findAll().then((services) => {
        res.json(services);
    });
};


exports.checkData=(req,res)=>{ 
    Service.findAll({     
        where: {
            pinCode: req.body.pinCode,
            productCode:req.body.productCode
        }
    }).then(function(services) {
        res.json(services);
    })
}




//show update form
exports.updateform = (req, res) => {
    Service.findAll({
        where: {
            id: req.params.id,
          }  
    }).then(function (dataa) {
        res.send(dataa)
})
}



//update
exports.updateService = (req, res) => {
    console.log(req.body)
    const query = {
        id:req.body.id,
        pinCode: req.body.pinCode,
        productCode: req.body.productCode,
        quantity:req.body.quantity
    }
    Service.update(query, { where: { id: req.body.id } })
        .then(function (data) {
            res.send(data)
        })
        .catch(function (error) {
            console.log('error occured', error)
        });
};


exports.deleteService = (req, res) => {
    Service.destroy({ where: { id: req.params.id } })
        .then(()=>{
            Service.findAll().then(products=>{
                res.send(products)
            })
         
        })
        .catch(function (error) {
            console.log('error occured', error)
        });

};





