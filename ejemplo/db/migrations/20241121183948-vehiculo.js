'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vehiculos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      marca: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      modelo: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      ano: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      placa: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vehiculos');
  }
};
