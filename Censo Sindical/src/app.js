const express = require('express');
const config = require( './config' );
const afiliacion = require('./modulos/afiliacion/rutas');
const app = express();

//Configuración
app.set('port', config.app.port);

// Rutas
app.use('/api/afiliacion', afiliacion);

module.exports = app;