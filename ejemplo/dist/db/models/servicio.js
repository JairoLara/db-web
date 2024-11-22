"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
});
const Servicio = sequelize.define('Servicio', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    hora: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    costo: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
    },
});
exports.default = Servicio;
