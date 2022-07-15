const uuid = require("uuid");
const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const password = '12345678'
    return queryInterface.bulkInsert("Users",[{
      id: uuid.v4(),
      username: "admin",
      name:"admin",
      password: bcrypt.hashSync(password, 12),
      type: "admin",
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
   return CountQueuingStrategyInterface.bulkDelete("Users", null);

  },
};
