const mongoose = require("mongoose");

const tipoEquipo = mongoose.Schema({
    nombre: { type: String, required: true },
    fecha_creacion: { type: Date, required: true },
    fecha_actualizacion: { type: Date, required: true },
    estado: { type: String }

});

module.exports = mongoose.model("tipoEquipo", tipoEquipo);