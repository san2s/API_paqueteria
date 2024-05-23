// /src/routes/oficina.js
// Importar los módulos necesarios
const express = require('express'); 
const router = express.Router();
const {
    obtenerOficinas,
    crearOficina,
    obtenerOficinaPorId,
    actualizarOficina,
    eliminarOficina
} = require('../controllers/oficina'); // Importamos las funciones del controlador de oficinas

// Ruta para obtener todos los oficinas
router.get('/', obtenerOficinas);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función
// obtenerOficinas del controlador

// Ruta para obtener una oficina por su ID
router.get('/:id', obtenerOficinaPorId);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se
// ejecuta la función obtenerOficinaPorId del controlador

// Ruta para crear un nuevo oficina
router.post('/', crearOficina);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función
// crearoficina del controlador

// Ruta para actualizar una oficina por su ID
router.put('/:id', actualizarOficina);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de ID ("/:id"), se
// ejecuta la función actualizarOficina del controlador

// Ruta para eliminar un oficina por su ID
router.delete('/:id', eliminarOficina);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de ID ("/:id"), se 
// ejecuta la función eliminarOficina del controlador

// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos
module.exports = router;