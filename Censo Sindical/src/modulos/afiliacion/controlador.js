const db = require('../../db/mysql');

const TABLA = 'afiliado';

function obtenerAfiliados(){
    return db.obtenerDatos(TABLA);
}

function obtenerRegAfiliado(id){
    return db.obtenerRegistro(TABLA, id);
}

module.exports = {
    obtenerAfiliados,
    obtenerRegAfiliado,
}