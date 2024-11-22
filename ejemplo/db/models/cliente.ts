require('dotenv').config();
import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST
});

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,  // Puedes hacerlo obligatorio
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,  // Puedes hacerlo obligatorio
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,  // Si lo quieres obligatorio
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,  // Si lo quieres obligatorio
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,  // Si lo quieres obligatorio
    validate: {
      isEmail: true  // Validar que sea un correo electrónico válido
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,  // Puedes hacerlo obligatorio
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,  // Puedes hacerlo obligatorio
  }
});

export default Cliente