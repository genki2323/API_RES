var express = require('express');
const routerV = express.Router();


const TipoEquipoController = require('../controllers/cTipoEquipo');

routerV.get('', TipoEquipoController.getTipoEquipo); /// definimos las rutas para usuarios en este caso
routerV.post('', TipoEquipoController.addTipoEquipo);
routerV.delete("/:id", TipoEquipoController.deleteTipoEquipoId);
routerV.get("/:id", TipoEquipoController.getTipoEquipoId);
routerV.patch("/:id", TipoEquipoController.updateTipoEquipoId);




module.exports = routerV;