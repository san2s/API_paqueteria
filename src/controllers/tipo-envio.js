// /src/controllers/oficina.js
// Importar los modelos necesarios
const Cliente = require("../models/cliente");
const Envio = require("../models/envio");
const Oficina = require("../models/oficina");
const TipoEnvio = require("../models/tipo-envio");

// Asociar una constante a una funcion arrow anonima
const obtenerTiposEnvio = async (req, res) => {
  try {
    // Buscar todos los tipos de envio en la base de datos
    const tipos = await TipoEnvio.find().select('-_id');
    // Enviar la lista de tipos de envios como respuesta
    res.status(200).json(tipos);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const crearTipoEnvio = async (req, res) => {
  // Crear un nuevo tipo de envio con la carga de datos del body
  const nuevoTipoEnvio = new TipoEnvio(req.body);
  try {
    // Guardar el nuevo tipo en la base de datos
    const tipoGuardado = await nuevoTipoEnvio.save();
    // Enviar el tipo guardado como respuesta
    res.status(201).json(tipoGuardado);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

// Buscar un tipo de envio por su ID
const obtenerTipoEnvioPorId = async (req, res) => {
  try {
    // Buscar un tipo de envio por su ID en la base de datos
    const tipo = await TipoEnvio.findOne({ ID: req.params.id }).select('-_id');

    if (tipo == null) {
      // Si el tipo de envio no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el tipo de envio" });
    }
    // Enviar el tipo de envio encontrado como respuesta
    res.status(200).json(tipo);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const actualizarTipoEnvio = async (req, res) => {
  try {
    // Buscar y actualizar una tipo de envio por su ID
    // El argumento { new: true } indica que se debe retornar el documento actualizado
    const tipoActualizado = await TipoEnvio.findOneAndUpdate(
      { ID: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (tipoActualizado == null) {
      // Si el tipo  no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el tipo de envio" });
    }
    // Enviar el tipo de envio actualizado como respuesta
    res.status(200).json(tipoActualizado);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

const eliminarTipoEnvio = async (req, res) => {
  try {
    // Buscar y eliminar un tipo de envio por su ID
    const tipo = await TipoEnvio.findOneAndDelete({ ID: req.params.id });
    if (tipo == null) {
      // Si el tipo de envio no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró el tipo de envio" });
    }
    // Enviar un mensaje de éxito como respuesta
    res.status(200).json({ message: "Tipo de envio eliminado correctamente" });
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

// Exportamos las funciones del controlador
module.exports = {
  obtenerTiposEnvio,
  crearTipoEnvio,
  obtenerTipoEnvioPorId,
  actualizarTipoEnvio,
  eliminarTipoEnvio
};
