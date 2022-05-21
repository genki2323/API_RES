const TipoEquipo = require('../models/mTipoEquipo');

exports.getTipoEquipo = (req, res) => { /// Aca van todas las funciones a utilizar como la multiplicacion con postman q trabajamos y la conexion a la BD para
    TipoEquipo.find().then((postResult) => {
        res.status(200).json(postResult);
    });



};

exports.addTipoEquipo = (req, res) => {
    const TipoEquipoAdd = new TipoEquipo({
        
        documento: req.body.documento,
        nombre: req.body.nombre,
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        estado: req.body.estado
    });

    TipoEquipoAdd.save().then((createdTipoEquipo) => {
        console.log(createdTipoEquipo);
        res.status(201).json("Venta registrada");
    });
};

exports.getTipoEquipoId = (req, res) => {
    TipoEquipo.findById(req.params.id).then((TipoEquipoResult) => {
        if (TipoEquipoResult) {
            res.status(200).json(TipoEquipoResult);
        } else {
            res.status(404).json("Venta no encontrada");
        }
    });
};

exports.deleteTipoEquipoId = (req, res) => {
    TipoEquipo.findById(req.params.id).then((TipoEquipoResult) => {
        if (TipoEquipoResult) {
            TipoEquipo.findByIdAndDelete({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Deleted")
            });
        } else {
            res.status(404).json("No Encontrado")
        }
    });

}

exports.updateTipoEquipoId = (req, res) => {
    TipoEquipo.findById(req.params.id).then((TipoEquipoResult) => {
        if (TipoEquipoResult) {
            TipoEquipo.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Update")
            });
        } else {
            res.status(404).json("No Update")
        }
    });
}