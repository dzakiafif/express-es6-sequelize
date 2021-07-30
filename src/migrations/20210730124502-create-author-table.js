module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('author', {
      id: {
        unique: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      gender: {
        type: Sequelize.ENUM,
        values: ['m', 'f'],
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('author');
  },
};
