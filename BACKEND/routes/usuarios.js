const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios');

router.post('/usuarios/new', usuariosController.new);

module.exports = router