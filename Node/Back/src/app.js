const express = require('express');
const config = require('./config');
const afiliacion = require('./modules/afiliacion/rutas');
const app = express();

//Configuracion
app.set('port', config.app.port);

//rutas
app.use('/api/afiliacion', afiliacion);

module.exports = app;