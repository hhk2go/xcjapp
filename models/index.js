var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

var dbconf = require("../config.json").mysqldb.test;
var sequelize = new Sequelize(dbconf.uri);
// var node_env = process.env.NODE_ENV || "development";
// var dbconf = require("../config.json")[node_env];
// var sequelize = new Sequelize(dbconf.database, dbconf.username, dbconf.password, dbconf.option);

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
})
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

var db = {};

fs.readdirSync(__dirname)
  .filter( (file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach( (file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach( (modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;