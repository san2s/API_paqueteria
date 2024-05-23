// /src/routes/envio.js
// Importar los módulos necesarios
const express = require('express'); 
const router = express.Router();
const {
    obtenerEnvios,
    crearEnvio,
    obtenerEnvioPorId,
    actualizarEnvio,
    eliminarEnvio
} = require('../controllers/envio'); // Importamos las funciones del controlador de envios

// Ruta para obtener todos los envios
router.get('/', obtenerEnvios);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función
// obtenerEnvios del controlador

// Ruta para obtener una envio por su ID
router.get('/:id', obtenerEnvioPorId);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se
// ejecuta la función obtenerEnvioPorId del controlador

// Ruta para crear un nuevo envio
router.post('/', crearEnvio);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función
// crearEnvio del controlador

// Ruta para actualizar una envio por su ID
router.put('/:id', actualizarEnvio);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se
// ejecuta la función actualizarEnvio del controlador

// Ruta para eliminar un envio por su ID
router.delete('/:id', eliminarEnvio);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se 
// ejecuta la función eliminarEnvio del controlador

// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos
module.exports = router;