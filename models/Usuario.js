const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true, //junta los espacios
        unique: true //si alguien ya esta registrado, no podrá tener dos cuentas
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Usuario', UsuariosSchema);