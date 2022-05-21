var express = require('express');
const router = express.Router();


const userController = require('../controllers/cInventario');

router.get('', userController.getInventario); /// definimos las rutas para inventario en este caso
///router.post('')
router.post('', userController.addInventario);
router.delete('/:id', userController.deleteInventario);
router.get('/:id', userController.getInventarioId);
router.patch('/:id', userController.updateInventarioById);
router.get('/doc/:documento', userController.findUserByDocumento);


module.exports = router;