const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

// router.get('/', function(req, res) {
//     //res.send("Hola desde el index de la ruta /api");
//     respuesta.sucess(req, res, 'Esta es una respuesta exitosa', 200);
// });
router.get('/', obtenerAfiliados)

module.exports = router; 
//Se exporta para que pueda ser utilizada en otros archivos

async function obtenerAfiliados(req, res){
    try{
        const items = await controlador.obtenerAfiliados();
        respuesta.succes(req, res, items, 200);

    } catch(err){
        respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
    }
}