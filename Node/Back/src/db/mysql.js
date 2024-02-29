const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    passwd: config.mysql.passwd,
    database: config.mysql.database
}



module.exports = {
    obtenerDatos,
    obtenerRegistro,
    agregarRegistro,
    eliminarRegistro
}
conectarBD();
//Traer datos de la tabla
function obtenerDatos(tabla){
    //return 'Aqui se muestran los registros de mi tabla'

    return new Promise ((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${tabla}`, (err, result) =>{
            return !err ? resolve(result) : reject(console.log("Algo salio mal al realizar la consulta."))
        });
    })
}
function obtenerRegistro(tabla,id){
    
}
function agregarRegistro(tabla, data){
    
}
function eliminarRegistro(tabla, id){
    
}