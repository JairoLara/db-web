//instalar npm install -g ts-node
//instalar npm install -g typescript
//instalar npm install -g nodemon
//instalar npm install -g sequelize-cli
//instalar npm install -g mysql2
//instalar npm install -g dotenv

import express from 'express';
import Cliente from '../db/models/cliente';  // Aquí importa correctamente los modelos
import Vehiculo from '../db//models/vehiculo';
import Servicio from '../db/models/servicio';
import Oferta from '../db/models/oferta';

const router = express.Router();

/**
 * Ejercicio 2 - Obtener todos los elementos
 */
router.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();  // Aquí obtienes todos los clientes
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching clientes', error });
  }
});

router.get('/vehiculos', async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll();  // Obtener todos los vehículos
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vehiculos', error });
  }
});

router.get('/servicios', async (req, res) => {
  try {
    const servicios = await Servicio.findAll();  // Obtener todos los servicios
    res.status(200).json(servicios);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching servicios', error });
  }
});

router.get('/ofertas', async (req, res) => {
  try {
    const ofertas = await Oferta.findAll();  // Obtener todas las ofertas
    res.status(200).json(ofertas);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ofertas', error });
  }
});

/**
 * Ejercicio 3 - Crear nuevos elementos
 */
router.post('/clientes', async (req, res) => {
  const { nombre, apellido, direccion, telefono, email } = req.body;
  try {
    const newCliente = await Cliente.create({ nombre, apellido, direccion, telefono, email });
    res.status(201).json(newCliente);  // Crear un nuevo cliente
  } catch (error) {
    res.status(500).json({ message: 'Error creating cliente', error });
  }
});

router.post('/vehiculos', async (req, res) => {
  const { marca, modelo, ano, color, placa } = req.body;
  try {
    const newVehiculo = await Vehiculo.create({ marca, modelo, ano, color, placa });
    res.status(201).json(newVehiculo);  // Crear un nuevo vehículo
  } catch (error) {
    res.status(500).json({ message: 'Error creating vehiculo', error });
  }
});

router.post('/servicios', async (req, res) => {
  const { tipo, fecha, hora, costo } = req.body;
  try {
    const newServicio = await Servicio.create({ tipo, fecha, hora, costo });
    res.status(201).json(newServicio);  // Crear un nuevo servicio
  } catch (error) {
    res.status(500).json({ message: 'Error creating servicio', error });
  }
});

router.post('/ofertas', async (req, res) => {
  const { tipo, fecha, hora, costo } = req.body;
  try {
    const newOferta = await Oferta.create({ tipo, fecha, hora, costo });
    res.status(201).json(newOferta);  // Crear una nueva oferta
  } catch (error) {
    res.status(500).json({ message: 'Error creating oferta', error });
  }
});

/**
 * Ejercicio 4 - Actualizar elementos
 */
router.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, telefono, email } = req.body;
  try {
    const clienteToUpdate = await Cliente.findByPk(id);
    if (clienteToUpdate) {
      await clienteToUpdate.update({ nombre, apellido, direccion, telefono, email });
      res.status(200).json(clienteToUpdate);  // Actualizar cliente
    } else {
      res.status(404).json({ message: 'Cliente not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating cliente', error });
  }
});

router.put('/vehiculos/:id', async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, ano, color, placa } = req.body;
  try {
    const vehiculoToUpdate = await Vehiculo.findByPk(id);
    if (vehiculoToUpdate) {
      await vehiculoToUpdate.update({ marca, modelo, ano, color, placa });
      res.status(200).json(vehiculoToUpdate);  // Actualizar vehículo
    } else {
      res.status(404).json({ message: 'Vehiculo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating vehiculo', error });
  }
});

router.put('/servicios/:id', async (req, res) => {
  const { id } = req.params;
  const { tipo, fecha, hora, costo } = req.body;
  try {
    const servicioToUpdate = await Servicio.findByPk(id);
    if (servicioToUpdate) {
      await servicioToUpdate.update({ tipo, fecha, hora, costo });
      res.status(200).json(servicioToUpdate);  // Actualizar servicio
    } else {
      res.status(404).json({ message: 'Servicio not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating servicio', error });
  }
});

router.put('/ofertas/:id', async (req, res) => {
  const { id } = req.params;
  const { tipo, fecha, hora, costo } = req.body;
  try {
    const ofertaToUpdate = await Oferta.findByPk(id);
    if (ofertaToUpdate) {
      await ofertaToUpdate.update({ tipo, fecha, hora, costo });
      res.status(200).json(ofertaToUpdate);  // Actualizar oferta
    } else {
      res.status(404).json({ message: 'Oferta not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating oferta', error });
  }
});

/**
 * Ejercicio 5 - Lógica de ofertas y baja
 */
// Lógica para obtener oferta si el cliente no ha hecho un servicio en más de 6 meses y dar de baja si no lo ha hecho en más de 10 meses.
router.get('/ofertas/cliente/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);  // Encuentra al cliente por ID
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    
    // Aquí puedes agregar la lógica para ver cuándo fue la última vez que el cliente hizo un servicio y manejar la oferta o baja.
    res.status(200).json({ message: 'Oferta o baja dependiendo del estado del cliente' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing request', error });
  }
});

export default router;
