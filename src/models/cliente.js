// /src/models/cliente.js
// Importar mongoose para definir esquema y modelo
const mongoose = require("mongoose");
const clienteSchema = new mongoose.Schema(
  {
    CURP: {
      type: String,
      required: true,
      unique: true,
    },

    NOMBRE: {
      type: String,
      required: true,
    },

    APELLIDOS: {
      type: String,
      required: true,
    },

    EMAIL: {
      type: String,
      required: true,
      unique: true,
    },

    OFICINAS: [
      {
        type: String,
        ref: "Oficina",
      },
    ],

    ENVIOS: [
      {
        type: String,
        ref: "Envio",
      },
    ],
  },
  { 
    timestamps: true,
  }
);

module.exports = mongoose.model("Cliente", clienteSchema);
