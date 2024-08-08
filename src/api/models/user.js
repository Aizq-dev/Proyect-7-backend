const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {type: String,require:true,trim: true},
    password: {type: String, require: true, validate: {
        validator: function(v) {
            // Contraseña debe tener al menos 6 caracteres, una minúscula y una mayúscula
            return /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(v);
        },
        message: 'La contraseña debe tener al menos 6 caracteres, una letra minúscula y una letra mayúscula.'
    }},
    avatar: {type: String}

})


const User = mongoose.model('User', userSchema)


module.exports = {User}