const express = require('express');
require('dotenv').config();
// var cors=require("cors")
const db=require("./config/db.config.js");

const app = express();
const port = process.env.PORT || 5000;
// app.use(cors())

const cors=require("cors");
const corsOptions ={
   origin:'*'
}

app.use(cors(corsOptions)) 

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.use('/uploads',express.static('uploads'));
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the
//  database (which columns it has, what are their data types, etc),
//  and then performs the necessary changes in the table to make it match the model.

db.sequelize.sync({ alter: true }).then(() => {
     console.log("Drop and Resync with { alter: true }");
}).catch((e)=>{
  console.log(e);
});

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
  });
 
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');
const serviceRoutes = require('./routes/serviceAbilityRoute');
const adminRoutes=require('./routes/adminRoute');

app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', serviceRoutes);
app.use('/',adminRoutes)


app.listen(port, () => console.log(`Listening on port ${port}`));

