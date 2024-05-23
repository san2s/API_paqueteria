// /src/routes/tipo-envio.js
// Importar los módulos necesarios
const express = require('express'); 
const router = express.Router();
const {
    obtenerTiposEnvio,
    crearTipoEnvio,
    obtenerTipoEnvioPorId,
    actualizarTipoEnvio,
    eliminarTipoEnvio
} = require('../controllers/tipo-envio'); // Importamos las funciones del controlador de envios

// Ruta para obtener todos los tipos de envio
router.get('/', obtenerTiposEnvio);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función
// obtenerEnvios del controlador

// Ruta para obtener un tipo de envio por su ID
router.get('/:id', obtenerTipoEnvioPorId);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se
// ejecuta la función obtenerTipoEnvioPorId del controlador

// Ruta para crear un nuevo tipo de envio
router.post('/', crearTipoEnvio);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función
// crearEnvio del controlador

// Ruta para actualizar un tipo de envio por su ID
router.put('/:id', actualizarTipoEnvio);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se
// ejecuta la función actualizarTipoEnvio del controlador

// Ruta para eliminar un envio tipo de envio por su ID
router.delete('/:id', eliminarTipoEnvio);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se 
// ejecuta la función eliminarTipoEnvio del controlador

// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos
module.exports = router;