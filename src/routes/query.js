const express = require("express");
const router = express.Router();
const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8 } = require("../controllers/query");

// Q1. Listar los datos de todas las oficinas
router.get("/oficinas", Q1);

// Q2. Listar los envíos realizados en una determinada oficina
router.get("/oficinas/:id/envios", Q2);

// Q3. Listar los envíos que utilizan un tipo específico de envío
router.get("/tipos-envio/:id/envios", Q3);

// Q4. Listar los envíos realizados por un cliente en específico en todas las oficinas
router.get("/clientes/:curp/envios", Q4);

// Q5. Listar los clientes que han realizado envíos en una determinada oficina
router.get("/oficinas/:id/clientes", Q5);

// Q6. Listar los envíos de todas las oficinas con estatus de entregado
router.get("/envios/entregados", Q6);

// Q7. Listar los clientes y sus envíos que se han remitido por el servicio terrestre considerando todas las oficinas
router.get("/envios/terrestre", Q7);

// Q8. Listar los clientes y sus envíos que se han remitido por el servicio express considerando una oficina en específico
router.get("/oficinas/:id/envios/express", Q8);

module.exports = router;
