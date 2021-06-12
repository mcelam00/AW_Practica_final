//Requerimos el módulo express de nodejs
const express = require('express');
//Biblioteca de conexion a mongodb y trabajar con los datos
const mongoose = require('mongoose');
//Peticiones cruzadas
const cors = require('cors');
//Para leer del sistema de archivos
const fs = require('fs');

//Inicializamos express y ejecutamos el framework. App es de ahora en adelante el servidor
const app = express();

//Inicializamos mongoose y abrimos conexion con la base de datos
mongoose.connect('mongodb://localhost/AW_Coleccion_Cromos')
    .then(db => console.log('Base de datos conectada')) //para que cuando se conecte lo diga
    .catch(err => console.error(err)); //si sucede un problema en la conexión que lo muestre tambien




/*CONFIGURACIONES*/
app.set('port', process.env.PORT || 5000); //se usará el puerto que proporcione el servicio cloud/S.O./máquina servidor y sino el 8080




/*MIDDLEWARE*/
app.use(express.json()); //para procesamiento de json
app.use(cors());


/*ENRUTAMIENTOS: Vamos a tartarlas en un fichero a parte para no saturar*/
//llamamos al archivo de rutas en router
//Cualquier ruta que venga dirigida a /server/enrutamientos se redirige a 
app.use('/baseDatos', require('./routes/enrutamientos'));



app.get('/Preguntas', (request, response)=>{

    //Numero aleatorio de 0 a 51 incluidos:
    indice = Math.floor(Math.random() * 52);
    indice = indice+1

    archivoPreguntas = fs.readFileSync('ganarPuntos/preguntas.json');
    preguntas = JSON.parse(archivoPreguntas);
console.log(preguntas['Pregunta'+indice]);
response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(preguntas['Pregunta'+indice]));


})





/*ARCHIVOS ESTÁTICOS A ENVIAR AL FRONTEND*/




//Ponemos a escuchar el servidor
app.listen(app.get('port') , () =>{
    console.log('El servidor se encuentra escuchando en el puerto', app.get('port'));
});