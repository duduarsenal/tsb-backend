const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    document: String,
    tel: String,
    endereco: {
        rua: String,
        numero: String,
        complemento: String,
        bairro: String,
        cep: String,
        cidade: String,
        uf: String
    },
    chavePix: {
        chaveTipo: String,
        chaveValue: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;