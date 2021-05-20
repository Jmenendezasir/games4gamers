const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsuarioSchema = Schema({
    username: String,
    password: String,
    email: String,
    role: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
