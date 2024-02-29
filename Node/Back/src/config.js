require('dotenv').config();
// Export an object containing the configuration settings for the application

module.exports = {
    // Define the app object with properties related to the application's configuration
    app: {
        // Define the port property with a default value of 4000
        // This property represents the port number on which the application will run
        port: process.env.PORT || 4000,
    },
}
var conexion;
function conectarBD(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) =>{
        if (err){
            console.log("Error en la conexion a la BD: "+ err.message)
            setTimeout(conectarBD, 200);
        }
        else{
            console.log("Conexión a la base de datos correcta");
        }

    });
}
module exports = {
    app
    mysql: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        passwd: process.env.DB_PASS || '',
        database: process.env.DB || 'db_censo_sindical'
    
    }
}
