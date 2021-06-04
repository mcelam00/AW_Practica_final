//Requerimos la biblioteca para trabajar con los datos
const mongoose = require('mongoose');
//solo me traigo la parte de esquema de la biblioteca
const{ Schema } = mongoose;


//definicion del esquema de los datos y sus tipos de datos.
//Le dice a mongoose como son los datos
const Esquemadato = new Schema({
    titulo: String,
    descripcion: String,
    fecha: Date,
    precio: Number
});

//Para poder usar el esquema en otras partes, necesito exportarlo y tener un modelo
//para poder insertar, eliminar...
module.exports = mongoose.model('nombre', Esquemadato);




