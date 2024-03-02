const db = require('../../db/mysql');

const TABLA = 'afiliado';

function obtenerAfiliados(){
    return db.obtenerDatos(TABLA);
}

function obtenerRegAfiliado(id){
    return db.obtenerRegistro(TABLA, id);
}

function eliminarRegAfiliado(id){
    return db.eliminarRegistro(TABLA, id);
}

function agregarRegAfiliado(id){
    return db.agregarRegistro(TABLA, data);
}

function actualizarRegAfiliado(id){
    return db.actualizarRegistro(TABLA, data);
}

module.exports = {
    obtenerAfiliados,
    obtenerRegAfiliado,
    eliminarRegAfiliado,
    agregarRegAfiliado,
    actualizarRegAfiliado
}