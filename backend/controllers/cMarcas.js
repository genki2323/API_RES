const Marcas = require('../models/mMarcas');

exports.getMarcas = (req, res) => {
    /// Aca van todas las funciones a utilizar como la multiplicacion con postman q trabajamos
    
    Marcas.find().then((marcasResult) => {
        res.status(200).json(marcasResult);
    });
}

exports.addMarcas = (req, res) => {
    const marcasAdd = new Marcas({
        documento: req.body.documento,
        nombre: req.body.nombre,
        fecha_creacion: new Date(),
        fecha_actualizacion:new Date(),
        estado: req.body.estado
    });

    marcasAdd.save().then((createdMarcas) => {
        console.log(createdMarcas);
        res.status(201).json("Created satisfied");
    });
};

exports.getMarcasId = (req, res) => {
    Marcas.findById(req.params.id).then((marcasResult) => {
        if (marcasResult) {
            res.status(200).json(marcasResult);
        } else {
            res.status(404).json("No Encontrado")
        }
    });
};

exports.deleteMarcas = (req, res) => {
    Marcas.findById(req.params.id).then((marcasResult) => {
        if (marcasResult) {
            Marcas.findByIdAndDelete({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Deleted")
            });
        } else {
            res.status(404).json("No Encontrado")
        }
    });

}

exports.updateMarcasById = (req, res) => {
    Marcas.findById(req.params.id).then((marcasResult) => {
        if (marcasResult) {
            Marcas.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err) {
                res.status(200).json("Update")
            });
        } else {
            res.status(404).json("No Update")
        }
    });
}

exports.findMarcasByDocumento = (req, res) => {
    /// busca las marcas por documento
    console.log("==============================================================");
    console.log("==============================================================");
    console.log("==============================================================");
    console.log("==================    findUserByDocumento   ==================");
    console.log("=================="+req.params.documento+"====================");
    console.log("==============================================================");
    console.log("==============================================================");
    console.log("==============================================================");

    Marcas.find({Documento:req.params.documento}).then((marcasResult) => {
        res.status(200).json(marcasResult);
    });
}
