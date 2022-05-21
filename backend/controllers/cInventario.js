const Inventario = require('../models/mInventario');

exports.getInventario = (req, res) => {
    /// Aca van todas las funciones a utilizar como la multiplicacion con postman q trabajamos
    
    Inventario.find().then((inventarioResult) => {
        res.status(200).json(inventarioResult);
    });
}

exports.addInventario = (req, res) => {
    const inventarioAdd = new Inventario({
        serial: req.body.serial,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion,
        color: req.body.color,
        foto: req.body.foto,
        fecha_compra: new Date(),
        precio: req.body.precio,
        usuario: req.body.usuario,
        marca: req.body.marca,
        tipoEquipo:req.body.tipoEquipo,
        estadoEquipo:req.body.estadoEquipo,
        fechaCreacion:req.body.fechaCreacion,
        fechaActualizacion:req.body.fechaActualizacion,
       
    });

    inventarioAdd.save().then((createInventario) => {
        console.log(createdInventario);
        res.status(201).json("Created satisfied");
    });
};

exports.getInventarioId = (req, res) => {
    Inventario.findById(req.params.id).then((inventarioResult) => {
        if (inventarioResult) {
            res.status(200).json(inventarioResult);
        } else {
            res.status(404).json("No Encontrado")
        }
    });
};

exports.deleteInventario = (req, res) => {
    Inventario.findById(req.params.id).then((InventarioResult) => {
        if (inventarioResult) {
            Inventario.findByIdAndDelete({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Deleted")
            });
        } else {
            res.status(404).json("No Encontrado")
        }
    });

}

exports.updateInventarioById = (req, res) => {
    Inventario.findById(req.params.id).then((inventarioResult) => {
        if (inventarioResult) {
            inventario.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Update")
            });
        } else {
            res.status(404).json("No Update")
        }
    });
}

exports.findUserByDocumento = (req, res) => {
    /// busca los usuarios por documento
    console.log("==============================================================");
    console.log("==============================================================");
    console.log("==============================================================");
    console.log("==================    findUserByDocumento   ==================");
    console.log("=================="+req.params.documento+"====================");
    console.log("==============================================================");
    console.log("==============================================================");
    console.log("==============================================================");

    Inventario.find({Documento:req.params.documento}).then((inventarioResult) => {
        res.status(200).json(inventarioResult);
    });
}
