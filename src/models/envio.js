// /src/models/cliente.js
// Importar mongoose para definir esquema y modelo
const mongoose = require("mongoose");
// Definir el esquema de envio
const envioSchema = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
      unique: true,
    },

    FECHA_DE_ENVIO: {
      type: String,
      required: true,
    },

    PESO: {
      type: String,
      required: true,
    },

    DIMENSIONES: {
      type: String,
      required: true,
    },

    COSTO_TOTAL: {
      type: String,
      required: true,
    },

    ESTATUS: {
      type: String,
      required: true,
    },

    CLIENTE: {
      type: String,
      ref: "Cliente",
    },

    ORIGEN: {
      type: String,
      ref: "Oficina",
    },

    DESTINO: {
      type: String,
      ref: "Oficina",
    },

    TIPO_ENVIO: {
      type: String,
      ref: "TipoEnvio",
    },
  },
  {
    // Configuración de opciones del esquema: timestamps agrega createdAt y updatedAt automáticamente
    timestamps: true,
  }
);

module.exports = mongoose.model("Envio", envioSchema);
