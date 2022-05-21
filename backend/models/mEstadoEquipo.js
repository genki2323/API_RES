const mongoose = require("mongoose");

const estadoEquipo = mongoose.Schema({
    nombre: { type: String, required: true },
    fecha_creacion: { type: Date, required: true },
    fecha_actualizacion: { type: Date, required: true },
    estado: { type: String,required: true, enum: ["Activo", "Inactivo"], }

});

module.exports = mongoose.model("estadoequipos", estadoEquipo);