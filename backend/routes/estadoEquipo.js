var express = require('express');
const routerE = express.Router();


const EstadoEquipoController = require('../controllers/cEstadoEquipo');

routerE.get('', EstadoEquipoController.getEstadoEquipo); /// definimos las rutas para usuarios en este caso
routerE.post('', EstadoEquipoController.addEstadoEquipo);
routerE.delete("/:id", EstadoEquipoController.deleteEstadoEquipoId);
routerE.get("/:id", EstadoEquipoController.getEstadoEquipoId);
routerE.patch("/:id", EstadoEquipoController.updateEstadoEquipoId);




module.exports = routerE;