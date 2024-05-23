// /src/models/tipo-envio.js
// Importar mongoose para definir esquema y modelo
const mongoose = require("mongoose");
// Definir el esquema de envio
const tipoEnvioSchema = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
      unique: true,
    },

    DESCRIPCION: {
      type: String,
      required: true,
    },

    PRECIO_KM: {
      type: String,
      required: true,
    },

    TIEMPO_ENTREGA: {
      type: String,
      required: true,
    },

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

module.exports = mongoose.model("TipoEnvio", tipoEnvioSchema);
