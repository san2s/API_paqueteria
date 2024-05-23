// /src/controllers/oficina.js
// Importar los modelos necesarios
const Cliente = require("../models/cliente");
const Envio = require("../models/envio");
const Oficina = require("../models/oficina");
const TipoEnvio = require("../models/tipo-envio");

// Asociar una constante a una funcion arrow anonima
const obtenerOficinas = async (req, res) => {
  try {
    // Buscar todas las oficinas en la base de datos
    const oficinas = await Oficina.find().select('-_id');
    // Enviar la lista de clientes como respuesta
    res.status(200).json(oficinas);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const crearOficina = async (req, res) => {
  // Crear una nueva oficina con la carga de datos del body
  const nuevaOficina = new Oficina(req.body);
  try {
    // Guardar la nueva oficina en la base de datos
    const oficinaGuardada = await nuevaOficina.save();
    // Enviar la oficina guardada como respuesta
    res.status(201).json(oficinaGuardada);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

// Buscar una oficina por su Id
const obtenerOficinaPorId = async (req, res) => {
  try {
    // Buscar una oficina por su ID en la base de datos
    const oficina = await Oficina.findOne({ ID: req.params.id }).select('-_id');

    if (oficina == null) {
      // Si la oficina no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró la oficina" });
    }

    // Realizar populate manualmente para CLIENTES y ENVIOS
    const clientes = await Cliente.find({ CURP: { $in: oficina.CLIENTES } });
    const envios = await Envio.find({ ID: { $in: oficina.ENVIOS } });

    // Convertir oficina a objeto plano para poder modificarlo
    const oficinaObj = oficina.toObject();

    // Asignar los clientes y envios poblados al objeto de la oficina
    oficinaObj.CLIENTES = clientes;
    oficinaObj.ENVIOS = envios;

    // Enviar la oficina encontrada como respuesta
    res.status(200).json(oficinaObj);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

const actualizarOficina = async (req, res) => {
  try {
    // Buscar y actualizar una oficina por su ID
    // El argumento { new: true } indica que se debe retornar el documento actualizado
    const oficinaActualizada = await Oficina.findOneAndUpdate(
      { ID: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (oficinaActualizada == null) {
      // Si la oficina no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró la oficina" });
    }
    // Enviar la oficina actualizada como respuesta
    res.status(200).json(oficinaActualizada);
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(400).json({ message: error.message });
  }
};

const eliminarOficina = async (req, res) => {
  try {
    // Buscar y eliminar una oficina por su ID
    const oficina = await Oficina.findOneAndDelete({ ID: req.params.id });
    if (oficina == null) {
      // Si la oficina no se encuentra, enviar un mensaje de error
      return res.status(404).json({ message: "No se encontró la oficina" });
    }
    // Enviar un mensaje de éxito como respuesta
    res.status(200).json({ message: "Oficina eliminada correctamente" });
  } catch (error) {
    // En caso de error, enviar un mensaje de error
    res.status(500).json({ message: error.message });
  }
};

// Exportamos las funciones del controlador
module.exports = {
  obtenerOficinas,
  crearOficina,
  obtenerOficinaPorId,
  actualizarOficina,
  eliminarOficina
};
