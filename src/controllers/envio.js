// /src/controllers/envio.js
// Importar los modelos necesarios
const Cliente = require("../models/cliente");
const Envio = require("../models/envio");
const Oficina = require("../models/oficina");
const TipoEnvio = require("../models/tipo-envio");

// Asociar una constante a una funcion arrow anonima
const obtenerEnvios = async (req, res) => {
  try {
    // Buscar todos los envios en la base de datos
    const envios = await Envio.find().select('-_id');
    // Enviar la lista de Envios como respuesta
    res.status(200).json(envios);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const crearEnvio = async (req, res) => {
  // Crear un nuevo envio con la carga de datos del body
  const nuevoEnvio = new Envio(req.body);
  try {
    // Guardar el nuevo envio en la base de datos
    const envioGuardado = await nuevoEnvio.save();
    // Enviar el cliente guardado como respuesta
    res.status(201).json(envioGuardado);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

// Buscar un envio por su ID
const obtenerEnvioPorId = async (req, res) => {
  try {
    // Buscar un envio por su ID en la base de datos
    const envio = await Envio.findOne({ ID: req.params.id }).select('-_id');

    if (envio == null) {
      // Si el envio no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el envio" });
    }
    // Enviar el envio encontrado como respuesta
    res.status(200).json(envio);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const actualizarEnvio = async (req, res) => {
  try {
    // Buscar y actualizar un envio por su ID
    // El argumento { new: true } indica que se debe retornar el documento actualizado
    const envioActualizado = await Envio.findOneAndUpdate(
      { ID: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (envioActualizado == null) {
      // Si el envio no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el envio" });
    }
    // Enviar el envio actualizado como respuesta
    res.status(200).json(envioActualizado);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

const eliminarEnvio = async (req, res) => {
  try {
    // Buscar y eliminar un envio por su ID
    const envio = await Envio.findOneAndDelete({ ID: req.params.id });
    if (envio == null) {
      // Si el alumno no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el envio" });
    }
    // Enviar un mensaje de éxito como respuesta
    res.status(200).json({ message: "Envio eliminado correctamente" });
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

// Exportamos las funciones del controlador
module.exports = {
  obtenerEnvios,
  crearEnvio,
  obtenerEnvioPorId,
  actualizarEnvio,
  eliminarEnvio
};
