const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', obtenerAfiliados);
router.get('/consultar/:id', obtenerRegAfiliado);

async function obtenerAfiliados(req,res){
      try{ 
            const items = await controlador.obtenerAfiliados();
            respuesta.sucess(req, res, items, 200);
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

async function obtenerRegAfiliado(req,res){
      try{ 
            const items = await controlador.obtenerRegAfiliado(req.params.id);
            respuesta.sucess(req, res, items, 200);
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

module.exports = router;