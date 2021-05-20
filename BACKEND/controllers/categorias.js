const Categoria = require('../models/categoria');

var controller = {
    new: function(req, res) {
        var body = req.body;
        var categoria = new Categoria();
        categoria.name = body.name;
        categoria.description = body.description;
        categoria.save((error, savedCategoria) => {
            if (error || !savedCategoria) {
                return res.status(200).send({
                    msg: 'La categoria no se pudo guardar correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'La categoria se guardo correctamente.',
                code: 200,
                status: 'success',
                categoria: savedCategoria,
            });
        })
    },
    getAll: function(req, res) {
        Categoria.find().exec((error, categorias) => {
            if (error || !categorias) {
                return res.status(200).send({
                    msg: 'Las categorias no se obtuvieron correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'Las categorias se obtuvieron correctamente.',
                code: 200,
                status: 'success',
                categorias: categorias,
            });
        })
    },
    getById: function(req, res) {
        var categoriaId = req.params.categoriaId;
        Categoria.findOne({_id: categoriaId}, (error, categoria) => {
            if (error || !categoria) {
                return res.status(200).send({
                    msg: 'La categoria no se pudo obtener correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'La categoria se obtuvo correctamente.',
                code: 200,
                status: 'success',
                categoria: categoria,
            });
        })
    }
}

module.exports = controller;
