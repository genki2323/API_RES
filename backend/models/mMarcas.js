const mongoose = require("mongoose");

const marcas = mongoose.Schema({
    documento: { type: Number, required: true },
    nombre: { type: String, required: true },
    fecha_creacion: { type: Date, required: true },
    fecha_actualizacion: { type: Date, required: true },
    estado: { type: String }
});

module.exports = mongoose.model("marcas", marcas);



