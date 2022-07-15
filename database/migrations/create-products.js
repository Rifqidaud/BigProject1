module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable( 'Products', {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      price: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products')
  }
};
