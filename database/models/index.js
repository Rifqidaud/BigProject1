require('dotenv').config();
const Sequelize = require("sequelize");

const {
    DB_NAME,
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_PASS,
    DB_DIALECT,
    DB_LOGGING
} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,{
    host: DB_HOST,
    port: parseInt(DB_PORT, 10),
    dialect: DB_DIALECT,
    logging: Boolean(DB_LOGGING),
    pool: {
        min: 1,
        max: 5,
        acquire: 30000,
        Idle: 60000
    }
})

const db = [];
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User.js")(sequelize, Sequelize);
db.product = require("./product.js")(sequelize, Sequelize);
db.cart = require("./cart.js")(sequelize, Sequelize);
db.order = require("./order.js")(sequelize, Sequelize);
db.orderdetail =require("./order-detail.js")(sequelize, Sequelize);

db.cart.belongsTo(db.product,{
    foreignKey:"product_id",
    
})

db.cart.belongsTo(db.users,{
    foreignKey:"user_id",
  
})

db.order.belongsTo(db.users,{
    foreignKey:"user_id",
    targetKey:"id"
})

db.order.hasMany(db.orderdetail,{
    foreignKey:"order_id"
})

db.orderdetail.belongsTo(db.product,{
    foreignKey:"product_id",
    targetKey:"id"
})

console.log(db,'db')

module.exports = db;
