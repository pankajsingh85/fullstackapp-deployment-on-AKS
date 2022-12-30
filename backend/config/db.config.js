const Sequelize = require("sequelize");
const env=require('../config/env.js')

console.log(env.database);
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host:env.host,
  dialect:"mysql",
  port:3306,
  operatorsAliases: false
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.product = require("../model/product.model.js")(sequelize, Sequelize);
db.service = require("../model/serviceAbility.model.js")(sequelize, Sequelize);
db.admin = require("../model/admin.model.js")(sequelize, Sequelize);

module.exports = db;






