'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicios', [
      {
        tipo: 'Mantenimiento',
        fecha: new Date(),
        hora: '10:00',
        costo: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Reparación',
        fecha: new Date(),
        hora: '11:00',
        costo: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Limpieza',
        fecha: new Date(),
        hora: '12:00',
        costo: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Revisión técnica',
        fecha: new Date(),
        hora: '14:00',
        costo: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Cambio de aceite',
        fecha: new Date(),
        hora: '15:00',
        costo: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};

