const db = require('../../db/mysql');

const TABLA = 'afiliado'

function obtenerAfiliados(){
    return db.obtenerDatos(TABLA);
}

module.exports = {
    obtenerAfiliados,
}