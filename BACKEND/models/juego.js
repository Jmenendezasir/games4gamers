const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JuegoSchema = Schema({
    name: String,
    description: String,
    categoria: String
});

module.exports = mongoose.model('Juego', JuegoSchema);
