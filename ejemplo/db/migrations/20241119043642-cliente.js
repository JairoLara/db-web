'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla "users" con los nuevos atributos
    await queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.DataTypes.STRING(120),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.DataTypes.STRING(120),
        allowNull: false,
      },
      direccion: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      telefono: {
        type: Sequelize.DataTypes.STRING(15),  // Limitar a 15 caracteres para teléfono
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(120),
        allowNull: false,
        unique: true,  // Asegurar que el correo sea único
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la tabla "clientes"
    await queryInterface.dropTable('clientes');
  }
};