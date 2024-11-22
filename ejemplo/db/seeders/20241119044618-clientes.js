'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar datos de ejemplo en la tabla "clientes"
    await queryInterface.bulkInsert('clientes', [
      {
        nombre: 'John Doe',
        apellido: 'Doe',
        direccion: '123 Main St, Springfield, IL',
        telefono: '555-1234',
        email: 'john.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Jane Smith',
        apellido: 'Smith',
        direccion: '456 Oak Ave, Springfield, IL',
        telefono: '555-5678',
        email: 'jane.smith@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Alice Johnson',
        apellido: 'Johnson',
        direccion: '789 Pine Blvd, Springfield, IL',
        telefono: '555-9876',
        email: 'alice.johnson@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Bob Brown',
        apellido: 'Brown',
        direccion: '101 Maple St, Springfield, IL',
        telefono: '555-1111',
        email: 'bob.brown@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Eve White',
        apellido: 'White',
        direccion: '202 Birch Rd, Springfield, IL',
        telefono: '555-2222',
        email: 'eve.white@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Eliminar los datos de la tabla "clientes"
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
