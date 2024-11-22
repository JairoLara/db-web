"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
});
const Vehiculo = sequelize.define('Vehiculo', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    placa: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
    },
});
exports.default = Vehiculo;
