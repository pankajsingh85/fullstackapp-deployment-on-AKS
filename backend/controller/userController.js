const mysql = require('mysql2');
const db = require("../config/db.config.js");
const User = db.user;

exports.getUser = (req, res) => {
    User.findAll({
        where: {
            email: req.body.email,
            password: req.body.password,
        }
    }).then(function (dataa) {
            res.send(dataa)
    })
    .catch(err => {
       console.log("error.........")
      });
};

exports.checkUser = (req, res) => {
    User.findAll({
        where: {
            email: req.body.email
        }
    }).then(function (dataa) {
            res.send(dataa)
    })
    .catch(err => {
       console.log("error.........")
      });
};


exports.addUser = (req, res) => {
    User.create({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
        .then(function (dataa) { 
            res.send(dataa)
        })
        .catch(function (err) {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Teacher."
              });
        });
};


