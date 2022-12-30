const { Op } = require("sequelize");
const db = require("../config/db.config.js");
const Product = db.product;
const multer = require('multer');
const path = require('path');

var imageName;

exports.upload = multer({
    storage:  multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads')
        },
        filename: (req, file, cb) => {
            console.log(file);
            cb(null, file.originalname + "-" + path.extname(file.originalname));
            const name = file.originalname + "-" + path.extname(file.originalname);
            console.log(name)
            imageName = "uploads/" + name;
        }
    }),
    limits: { fieldSize: '10000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single("image")


// add product
exports.create = (req, res) => {
    Product.create({
        productCode: req.body.productCode,
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        productImage:imageName
    }).then(function(data) {
        res.json(data)
    });

};


//show update form
exports.updateform = (req, res) => {
    Product.findAll({
        where: {
            productCode: req.params.productCode,
          }  
    }).then(function (dataa) {
        res.send(dataa)
})
}



//update
exports.updateProduct = (req, res) => {
    console.log(req.body)
    const query = {
        productCode: req.body.productCode,
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        productImage:imageName
    }
    Product.update(query, { where: { productCode: req.body.productCode } })
        .then(function (data) {
            res.send(data)
        })
        .catch(function (error) {
            console.log('error occured', error)
        });
};


//delete product
exports.deleteProduct = (req, res) => {
    Product.destroy({ where: { productCode: req.params.productCode } })
        .then(()=>{
            Product.findAll().then(products=>{
                res.send(products)
            })
         
        })
        .catch(function (error) {
            console.log('error occured', error)
        });

};

// Get all products
exports.findAll = (req, res) => {
    Product.findAll().then((products) => {
        res.json(products);
    });
};

//get price
exports.getPrice=(req,res)=>{
    Product.findAll({
        where: {
            productCode: req.params.productCode
        }
    }).then(function(products) {
        res.json(products);
    })
}


//get details
exports.getDetails=(req,res)=>{
    Product.findAll({
        where: {
            productCode: req.params.productCode
        }
    }).then(function(products) {
        res.json(products);
    })
}

//filter price
exports.filterPrice=(req,res)=>{
        Product.findAll({
        where: {
            productPrice :{
                [Op.lte]: req.body.productPrice
            } 
        }
    }).then(function(products) {
        res.json(products);
    })
}


//search products
exports.search=(req, res) => {
    Product.findAll({
        where: {
            productName: { [Op.like]: "%"+req.body.productName+"%" },
            productBrand: {  [Op.like]: "%"+req.body.productBrand+"%"},
            productCode:{   [Op.like]: "%"+req.body.productCode+"%"}
        }
    }).then(function(products) {
        res.json(products);
    })
};


exports.checkProduct = (req, res) => {
    Product.findAll({
        where: {
            productCode: req.body.productCode
        }
    }).then(function (dataa) {
            res.send(dataa)
    })
    .catch(err => {
       console.log("error.........")
      });
};



