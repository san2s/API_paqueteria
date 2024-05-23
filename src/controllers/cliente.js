// /src/controllers/oficina.js
// Importar los modelos necesarios
const Cliente = require("../models/cliente");
const Envio = require("../models/envio");
const Oficina = require("../models/oficina");
const TipoEnvio = require("../models/tipo-envio");

// Asociar una constante a una funcion arrow anonima
const obtenerClientes = async (req, res) => {
  try {
    // Buscar todos los clientes en la base de datos
    const clientes = await Cliente.find().select('-_id');
    // Enviar la lista de clientes como respuesta
    res.status(200).json(clientes);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const crearCliente = async (req, res) => {
  // Crear un nuevo cliente con la carga de datos del body
  const nuevoCliente = new Cliente(req.body);
  try {
    // Guardar el nuevo cliente en la base de datos
    const clienteGuardado = await nuevoCliente.save();
    // Enviar el cliente guardado como respuesta
    res.status(201).json(clienteGuardado);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

// Buscar un cliente por su Id (CURP)
const obtenerClientePorId = async (req, res) => {
  try {
    // Buscar un cliente por su CURP en la base de datos
    const cliente = await Cliente.findOne({ CURP: req.params.id }).select('-_id');

    if (cliente == null) {
      // Si el cliente no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el cliente" });
    }
    // Enviar el cliente encontrado como respuesta
    res.status(200).json(cliente);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const actualizarCliente = async (req, res) => {
  try {
    // Buscar y actualizar un cliente por su CURP
    // El argumento { new: true } indica que se debe retornar el documento actualizado
    const clienteActualizado = await Cliente.findOneAndUpdate(
      { CURP: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (clienteActualizado == null) {
      // Si el cliente no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el cliente" });
    }
    // Enviar la oficina actualizada como respuesta
    res.status(200).json(clienteActualizado);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

const eliminarCliente = async (req, res) => {
  try {
    // Buscar y eliminar un cliente por su CURP
    const cliente = await Cliente.findOneAndDelete({ CURP: req.params.id });
    if (cliente == null) {
      // Si el cliente no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el cliente" });
    }
    // Enviar un mensaje de éxito como respuesta
    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};


// Exportamos las funciones del controlador
module.exports = {
  obtenerClientes,
  crearCliente,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente
};
