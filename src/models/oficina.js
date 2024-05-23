// /src/models/paqueteria.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const oficinaSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    ID: {
      type: String,
      required: true,
      unique: true,
    },
    NOMBRE: {
      type: String,
      required: true,
    },
    DIRECCION: {
      CALLE: { type: String, required: true },
      NUMERO: { type: String, required: true },
      CIUDAD: { type: String, required: true },
      CODIGO_POSTAL: { type: String, required: true },
    },
    TELEFONO: {
      type: String,
      required: true,
      unique: true,
    },
    EMAIL: {
      type: String,
      required: true,
      unique: true,
    },
    CLIENTES: [
      {
        type: String,
        ref: "Cliente",
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

module.exports = mongoose.model("Oficina", oficinaSchema);
