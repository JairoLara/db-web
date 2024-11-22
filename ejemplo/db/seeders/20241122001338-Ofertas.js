'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ofertas', [
      {
        tipo: 'Descuento',
        fecha: new Date(),
        hora: '10:00',
        costo: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Promoción',
        fecha: new Date(),
        hora: '12:00',
        costo: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Paquete',
        fecha: new Date(),
        hora: '14:00',
        costo: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Regalo',
        fecha: new Date(),
        hora: '16:00',
        costo: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Sorteo',
        fecha: new Date(),
        hora: '18:00',
        costo: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ofertas', null, {});
  }
};

