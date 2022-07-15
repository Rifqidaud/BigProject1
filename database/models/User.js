module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: Sequelize.STRING,
        },
        password:{
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.ENUM("user","admin"),
        },
    },{
        timestamps:false
    });
    return User;
}