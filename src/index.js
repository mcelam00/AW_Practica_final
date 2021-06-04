//Requerimos el módulo express de nodejs
const express = require('express');
//Biblioteca de conexion a mongodb y trabajar con los datos
const mongoose = require('mongoose');

//Inicializamos express y ejecutamos el framework. App es de ahora en adelante el servidor
const app = express();

//Inicializamos mongoose
mongoose.connect('mongodb://localhost/baseDatos')
    .then(db => console.log('Base de datos conectada')) //para que cuando se conecte lo diga
    .catch(err => console.error(err)); //si sucede un problema en la conexión que lo muestre tambien


/*CONFIGURACIONES*/
app.set('port', process.env.PORT || 5000); //se usará el puerto que proporcione el servicio cloud/S.O./máquina servidor y sino el 8080



/*MIDDLEWARE*/
app.use(express.json()); //para procesamiento de json



/*ENRUTAMIENTOS*/



/*ARCHIVOS ESTÁTICOS A ENVIAR AL FRONTEND*/




//Ponemos a escuchar el servidor
app.listen(app.get('port') , () =>{
    console.log('El servidor se encuentra escuchando en el puerto', app.get('port'));
});