var express = require('express');
const router = express.Router();


const marcasController = require('../controllers/cMarcas');

router.get('', marcasController.getMarcas); /// definimos las rutas para marcas en este caso
///router.post('')
router.post('', marcasController.addMarcas);
router.delete('/:id', marcasController.deleteMarcas);
router.get('/:id', marcasController.getMarcasId);
router.patch('/:id', marcasController.updateMarcasById);
router.get('/doc/:documento', marcasController.findMarcasByDocumento);


module.exports = router;