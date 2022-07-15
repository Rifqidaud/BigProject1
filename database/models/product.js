module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("products", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING,
        },
        price:{
            type: Sequelize.INTEGER,
        },
        image:{
            type: Sequelize.STRING,
        },
        category:{
            type:Sequelize.STRING,
        },
        description:{
            type:Sequelize.STRING,
        },
        quantity:{
            type:Sequelize.INTEGER,
        },
    },{
        timestamps:false
    });
    return product;
}