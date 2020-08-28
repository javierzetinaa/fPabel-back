const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let usuarioShema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesaio'] },
    apellidos: { type: String, required: [true, 'Los apeliidos son necesarios'] },
    email: { type: String, required: [true, 'El correo es necesaio'], unique: true },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] }
});
usuarioShema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
usuarioShema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('Usuario', usuarioShema);
