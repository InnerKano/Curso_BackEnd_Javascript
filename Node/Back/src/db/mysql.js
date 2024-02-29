const mysql = require('mysql');
const config = require('../config');

//Traer datos de la tabla
function obtenerDatos(tabla){
    return 'Aqui se muestran los registros de mi tabla'
}
function obtenerRegistro(tabla,id){
    
}
function agregarRegistro(tabla, data){
    
}
function eliminarRegistro(tabla, id){
    
}

module.exports = {
    obtenerDatos,
    obtenerRegistro,
    agregarRegistro,
    eliminarRegistro
}