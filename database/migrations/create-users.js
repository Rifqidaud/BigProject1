module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable( 'Users', {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM('admin','user'),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
};
