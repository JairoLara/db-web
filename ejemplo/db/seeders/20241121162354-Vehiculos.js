'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehiculos', [
      {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2021,
        color: 'Rojo',
        placa: 'ABC123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2020,
        color: 'Negro',
        placa: 'XYZ789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Ford',
        modelo: 'Focus',
        ano: 2019,
        color: 'Azul',
        placa: 'LMN456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Chevrolet',
        modelo: 'Cruze',
        ano: 2022,
        color: 'Gris',
        placa: 'DEF123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Hyundai',
        modelo: 'Elantra',
        ano: 2023,
        color: 'Blanco',
        placa: 'PQR789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehiculos', null, {});
  }
};
