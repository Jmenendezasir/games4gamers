const Juego = require('../models/juego');

var controller = {
    new: function(req, res) {
        var body = req.body;
        var juego = new Juego();
        juego.name = body.name;
        juego.description = body.description;
        juego.categoria = body.categoria;
        juego.save((error, savedJuego) => {
            if (error || !savedJuego) {
                return res.status(200).send({
                    msg: 'El juego no se pudo guardar correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'El juego se guardó correctamente.',
                code: 200,
                status: 'success',
                categoria: savedJuego,
            });
        })
    },
    getAll: function(req, res) {
        Juego.find().exec((error, juegos) => {
            if (error || !juegos) {
                return res.status(200).send({
                    msg: 'Los juegos no se obtuvieron correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'Los juegos se obtuvieron correctamente.',
                code: 200,
                status: 'success',
                juegos: juegos,
            });
        })
    },
    getById: function(req, res) {
        var juegoId = req.params.juegoId;
        Juego.findOne({_id: juegoId}, (error, juego) => {
            if (error || !juego) {
                return res.status(200).send({
                    msg: 'El juego no se pudo obtener correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'El juego se obtuvo correctamente.',
                code: 200,
                status: 'success',
                juego: juego,
            });
        })
    }
}

module.exports = controller;