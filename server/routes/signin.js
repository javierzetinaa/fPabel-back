const express = require("express");
const bcrypt = require('bcrypt');
const Usuario = require("../models/usuario");
const app = express();
app.post('/signin', (req, res) => {
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        apellidos: body.apellidos,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
    });
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({ ok: true, usuario: usuarioDB });
    });
});
module.exports = app;