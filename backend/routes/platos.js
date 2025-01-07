const express = require('express');
const platosController = require('../controllers/platos');

const router = express.Router();

router.get('/', platosController.obtenerPlatos);

router.post('/', platosController.crearPlato);

module.exports = router;