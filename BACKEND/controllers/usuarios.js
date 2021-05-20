const Usuario = require('../models/usuario');

var controller = {
    new: async function(req, res) {
        var body = req.body;
        var usuario = new Usuario();
        usuario.username = body.username;
        usuario.password = body.password;
        usuario.email = body.email;
        usuario.role = "usuario";
            respuesta = await Usuario.findOne({$or : [{username: usuario.username} , {email: usuario.email}]}).exec();
            console.log(respuesta);
        if (respuesta == undefined) {
            usuario.save((error, savedUsuario) => {
                if (error || !savedUsuario) {
                    return res.status(200).send({
                        msg: 'El usuario no se registró correctamente.',
                        code: 200,
                        status: 'error',
                    });        
                }
                return res.status(200).send({
                    msg: 'El usuario se registró correctamente',
                    code: 200,
                    status: 'success',
                    usuario: savedUsuario,
                });
            })
        }
        else {
            return res.status(200).send({
                msg: "El usuario o email ya existen",
                code: 200,
                status: 'error',
            })
        }
    },
    getAll: function(req, res) {
        Usuario.find().exec((error, usuarios) => {
            if (error || !usuarios) {
                return res.status(200).send({
                    msg: 'Los usuarios no se obtuvieron correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'Los usuarios se obtuvieron correctamente.',
                code: 200,
                status: 'success',
                usuarios: usuarios,
            });
        })
    },
    getById: function(req, res) {
        var usuarioId = req.params.usuarioId;
        Usuario.findOne({_id: usuarioId}, (error, usuario) => {
            if (error || !usuario) {
                return res.status(200).send({
                    msg: 'El usuario no se pudo obtener correctamente.',
                    code: 200,
                    status: 'error',
                });        
            }
            return res.status(200).send({
                msg: 'El usuario se obtuvo correctamente.',
                code: 200,
                status: 'success',
                usuario: usuario,
            });
        })
    }
}

module.exports = controller;