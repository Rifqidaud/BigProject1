module.exports = (sequelize, Sequelize) => {
    const orderdetail = sequelize.define("orderdetail", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id:{
            type: Sequelize.INTEGER,
        },
        product_id:{
            type: Sequelize.INTEGER,
        },
        price:{
            type:Sequelize.INTEGER,
        },
        quantity:{
            type:Sequelize.INTEGER,
        },
        
        
    },{
        timestamps:false
    });
    return orderdetail;
}