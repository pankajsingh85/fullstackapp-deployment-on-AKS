const mysql = require('mysql2');
const db = require("../config/db.config.js");
const Admin = db.admin;

exports.addAdmin = (req, res) => {
    Admin.create({
        name:req.body.name,
        password: req.body.password,
    })
        .then(function (data) { 
            res.json(data)
        })
        .catch(function (err) {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Teacher."
              });
        });
};


exports.getAdmin = (req, res) => {
    Admin.findAll({
        where: {
            name: req.body.name,
            password: req.body.password,
        }
    }).then(function (dataa) {
            res.send(dataa)
    })
    .catch(err => {
       console.log("error.........")
      });
};
