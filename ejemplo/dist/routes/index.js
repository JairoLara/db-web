"use strict";
//instalar npm install -g ts-node
//instalar npm install -g typescript
//instalar npm install -g nodemon
//instalar npm install -g sequelize-cli
//instalar npm install -g mysql2
//instalar npm install -g dotenv
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../db/models/user"));
const vehiculo_1 = __importDefault(require("../db/models/vehiculo"));
const servicio_1 = __importDefault(require("../db/models/servicio"));
const oferta_1 = __importDefault(require("../db/models/oferta"));
const router = express_1.default.Router();
/**
 * Usuarios (Ejemplo que ya tienes)
 */
router.get('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userFound = yield user_1.default.findByPk(id); // Cambié por `Cliente` porque parece más relacionado
        if (userFound) {
            res.status(200).json(userFound);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
}));
router.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last_name, age } = req.body;
    try {
        const newUser = yield user_1.default.create({
            name,
            last_name,
            age,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}));
/**
 * Clientes
 */
router.get('/clientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield user_1.default.findAll();
        res.status(200).json(clientes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching clientes', error });
    }
}));
router.post('/clientes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, direccion, telefono, email } = req.body;
    try {
        const newCliente = yield user_1.default.create({ nombre, apellido, direccion, telefono, email });
        res.status(201).json(newCliente);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating cliente', error });
    }
}));
/**
 * Vehículos
 */
router.get('/vehiculos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehiculos = yield vehiculo_1.default.findAll();
        res.status(200).json(vehiculos);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching vehiculos', error });
    }
}));
router.post('/vehiculos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { marca, modelo, ano, color, placa } = req.body;
    try {
        const newVehiculo = yield vehiculo_1.default.create({ marca, modelo, ano, color, placa });
        res.status(201).json(newVehiculo);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating vehiculo', error });
    }
}));
/**
 * Servicios
 */
router.get('/servicios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servicios = yield servicio_1.default.findAll();
        res.status(200).json(servicios);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching servicios', error });
    }
}));
router.post('/servicios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo, fecha, hora, costo } = req.body;
    try {
        const newServicio = yield servicio_1.default.create({ tipo, fecha, hora, costo });
        res.status(201).json(newServicio);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating servicio', error });
    }
}));
/**
 * Ofertas
 */
router.get('/ofertas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ofertas = yield oferta_1.default.findAll();
        res.status(200).json(ofertas);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching ofertas', error });
    }
}));
router.post('/ofertas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo, fecha, hora, costo } = req.body;
    try {
        const newOferta = yield oferta_1.default.create({ tipo, fecha, hora, costo });
        res.status(201).json(newOferta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating oferta', error });
    }
}));
exports.default = router;
