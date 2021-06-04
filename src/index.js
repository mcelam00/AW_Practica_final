//Requerimos el módulo express de nodejs
const express = require('express');
//Inicializamos express y ejecutamos el framework. App es de ahora en adelante el servidor
const app = express();

//Ponemos a escuchar el servidor
app.listen(3000, () =>{
    console.log('El servidor se encuentra escuchando en el puerto 3000')
});