const EstadoEquipo = require('../models/mEstadoEquipo');

exports.getEstadoEquipo = (req, res) => { /// Aca van todas las funciones a utilizar como la multiplicacion con postman q trabajamos y la conexion a la BD para
    EstadoEquipo.find().then((estadoEquipoResult) => {
        res.status(200).json(estadoEquipoResult);
    });



};

exports.addEstadoEquipo = (req, res) => {
    const EstadoEquipoAdd = new EstadoEquipo({
        
        nombre: req.body.nombre,
        fecha_creacion: new Date(),
        fecha_actualizacion:new Date(),
        estado: req.body.estado
    });

    EstadoEquipoAdd.save().then((createdEstadoEquipo) => {
        console.log(createdEstadoEquipo);
        res.status(201).json("Estado de equipo registrado");
    });
};

exports.getEstadoEquipoId = (req, res) => {
    EstadoEquipo.findById(req.params.id).then((EstadoEquipoResult) => {
        if (EstadoEquipoResult) {
            res.status(200).json(EstadoEquipoResult);
        } else {
            res.status(404).json("Estado no encontrado");
        }
    });
};

exports.deleteEstadoEquipoId = (req, res) => {
    EstadoEquipo.findById(req.params.id).then((EstadoEquipoResult) => {
        if (EstadoEquipoResult) {
            EstadoEquipo.findByIdAndDelete({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Deleted")
            });
        } else {
            res.status(404).json("No Encontrado")
        }
    });

}

exports.updateEstadoEquipoId = (req, res) => {
    EstadoEquipo.findById(req.params.id).then((EstadoEquipoResult) => {
        if (EstadoEquipoResult) {
            EstadoEquipo.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Update")
            });
        } else {
            res.status(404).json("No Update")
        }
    });
}