// /src/routes/cliente.js
// Importar los módulos necesarios
const express = require('express'); 
const router = express.Router();
const {
    obtenerClientes,
    crearCliente,
    obtenerClientePorId,
    actualizarCliente,
    eliminarCliente
} = require('../controllers/cliente'); // Importamos las funciones del controlador de alumnos

// Ruta para obtener todos los clientes
router.get('/', obtenerClientes);
// Cuando se hace una solicitud GET a la ruta raíz ("/"), se ejecuta la función
// obtenerClientes del controlador

// Ruta para obtener un cliente por su CURP
router.get('/:id', obtenerClientePorId);
// Cuando se hace una solicitud GET a la ruta con un parámetro de ID ("/:id"), se
// ejecuta la función obtenerClientePorId del controlador

// Ruta para crear un nuevo cliente
router.post('/', crearCliente);
// Cuando se hace una solicitud POST a la ruta raíz ("/"), se ejecuta la función
// crearCliente del controlador

// Ruta para actualizar un cliente por su CURP
router.put('/:id', actualizarCliente);
// Cuando se hace una solicitud PUT a la ruta con un parámetro de CURP ("/:id"), se
// ejecuta la función actualizarCliente del controlador

// Ruta para eliminar un cliente por su CURP
router.delete('/:id', eliminarCliente);
// Cuando se hace una solicitud DELETE a la ruta con un parámetro de CURP ("/:id"), se 
// ejecuta la función eliminarCliente del controlador

// Exportamos el enrutador para cuando se requiera ser utilizado en otros archivos
module.exports = router;