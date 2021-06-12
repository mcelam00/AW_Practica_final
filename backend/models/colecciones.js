//Requerimos la biblioteca para trabajar con los datos
const mongoose = require('mongoose');
//solo me traigo la parte de esquema de la biblioteca
const{ Schema } = mongoose;


//definicion del esquema de los datos y sus tipos de datos.
//Le dice a mongoose como son los datos
const coleccion = new Schema({
    nombre: String,
    album: 
        {
          nombre: String,
          imagen: String,
          precio: Number,
        },
    cartas: [
        {
          nombre: String,
          imagen: String,
          precio: Number,
          quedan: Number,
        }
    ],

});

//Para poder usar el esquema en otras partes, necesito exportarlo y tener un modelo
//para poder insertar, eliminar...
module.exports = mongoose.model('coleccion', coleccion);




