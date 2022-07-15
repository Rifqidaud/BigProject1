module.exports = (sequelize, Sequelize) => {
    const cart = sequelize.define("carts", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id:{
            type: Sequelize.INTEGER,
        },
        user_id:{
            type: Sequelize.INTEGER,
        },
        quantity:{
            type:Sequelize.INTEGER,
        },
    },{
        timestamps:false
    });
    return cart;
}