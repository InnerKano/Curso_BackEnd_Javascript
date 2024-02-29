const app = require('./app') //la instancia dela aplicacion

// // Iniciaalizar el servidor
// //Con el listen escucha el puerto
// //La funcion flecha para revisar que este bien
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando por el puerto: ', app.get('port'));
});
