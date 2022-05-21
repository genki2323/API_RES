const { Schema, model } = require("mongoose");

const inventarioSchema = Schema({
  serial: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  fechaCompra: {
    type: Date,
    required: false,
  },
  precio: {
    type: Number,
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "mUsuarios",
    required: false,
  },
  marca: {
    type: Schema.Types.ObjectId,
    ref: "mMarcas",
    required: true,
  },
  tipoEquipo: {
    type: Schema.Types.ObjectId,
    ref: "mTipoEquipo",
    required: true,
  },
  estadoEquipo: {
    type: Schema.Types.ObjectId,
    ref: "mEstadoEquipo",
    required: true,
  },
  fechaCreacion: {
    type: Date,
    required: true,
  },
  fechaActualizacion: {
    type: Date,
    required: true,
  },
});

module.exports = model("inventario", inventarioSchema);
