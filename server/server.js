require('./config/config');
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(require('./routes/index'));
let conexionDB = async () => {
    await mongoose.connect(process.env.urlDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
}
conexionDB().then(console.log('Conexión Exitosa'));
app.listen(process.env.PORT, () => console.log('Escuchando puerto: ', process.env.PORT));