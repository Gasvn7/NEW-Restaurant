const express = require('express');
const platosController = require('../controllers/platos');

const router = express.Router();

router.get('/', platosController.obtenerPlatos);

router.post('/', platosController.crearPlato);

router.get('/:id', platosController.obtenerPlato);

router.put('/:id', platosController.editarPlato);

router.delete('/:id', platosController.eliminarPlato);

module.exports = router;