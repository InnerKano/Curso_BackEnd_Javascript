const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', obtenerAfiliados);
router.get('/consultar/:id', obtenerRegAfiliado);

router.delete('/eliminar/:id', eliminarRegAfiliado);
router.post('/crear/', agregarRegAfiliado);
router.put('/actualizar/', actualizarRegAfiliado);

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

async function eliminarRegAfiliado(req,res){
      try{ 
            const items = await controlador.eliminarRegAfiliado(req.params.id); 
            respuesta.sucess(req, res, 'Registro eliminado con exito', 200);
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};
async function agregarRegAfiliado(req,res){
      try{ 
            const items = await controlador.agregarRegAfiliado(req.body); // cuerpo de la solicitud
            respuesta.sucess(req, res, 'Registro agregado con extio', 201);
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }
};

async function actualizarRegAfiliado(req,res){

      const existe = await controlador.obtenerRegAfiliado(req.body.cedula);
      
      if(existe == '') {
            respuesta.sucess(req, res, 'registro no existe', 201);
      } else {
      try{ 
            const items = await controlador.actualizarRegAfiliado(req.body); // cuerpo de la solicitud
            respuesta.sucess(req, res, 'Registro actualizando con exito', 201);
      } catch(err){
            respuesta.error(req, res, 'Error interno del servidor: '+ err, 500);
      }

      }
};

module.exports = router;