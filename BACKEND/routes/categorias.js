// LLevamos estas constantes a todos los archivos de routes
const express = require('express');
const router = express.Router();

const categoriasController = require('../controllers/categorias');

router.post('/categorias/new', categoriasController.new);
router.get('/categorias/getAll', categoriasController.getAll);
router.get('/categorias/getById/:categoriaId', categoriasController.getById);



module.exports = router
