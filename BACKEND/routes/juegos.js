// LLevamos estas constantes a todos los archivos de routes
const express = require('express');
const router = express.Router();

const juegosController = require('../controllers/juegos');

router.post('/juegos/new', juegosController.new);
router.get('/juegos/getAll', juegosController.getAll);
router.get('/juegos/getById/:juegoId', juegosController.getById);



module.exports = router
