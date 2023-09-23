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
    document: {
        type: String,
        require: false
    },
    tel: {
        type: String,
        require: false
    },
    chavePix: {
        chaveTipo: {
            type: String,
            require: false
        },
        chaveValue: {
            type: String,
            require: false
        }
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