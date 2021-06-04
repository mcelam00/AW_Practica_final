//requerimos express para poder definir las rutas 
const express = require('express');

//objeto que tendrá todas las rutas y podremos llamarlo desde cualquier parte
const router = express.Router();

//Importamos los modelos de la base de datos definidos
const baseDatos = require('../models/EsquemaBD');



/*Al pedir el directorio raíz se hace una consulta de todo lo guardado en la BD*/
router.get('/', async (request, response) =>{
    
    const resultadoConsulta = await baseDatos.find(); //un SELECT *
    //El async await obecede a que es asincrono y cuando termine por su cuenta lo grabe en la constante

    console.log(resultadoConsulta);
    response.json(resultadoConsulta); //devolveríamos el json con los datos

});


/*Para que el navegador me pueda traer datos al servidor, usamos post
Método que permite recibir e INSERTAR un objeto del tipo definido en models a la BD*/

router.post('/', async (request, response) =>{

    //la consulta aqui será insertar datos. Los datos vienen en el cuerpo al ser un post
    //creamos una nueva instancia, como en hibernate los objetos que luego van a la base de datos
    const objetoBD = new baseDatos(request.body);
    
    //console.log(request.body);
    
    //console.log(new baseDatos());

    console.log(objetoBD);

    await objetoBD.save(); //lo llevamos a la base de datos, y lo hacemos asincronamente porque puede requerir tiempo

    response.send('Recibido y guardado a base de datos, gracias :)');

});



/*ACTUALIZAR EN LA BASE DE DATOS - Método put
En la URL indico que objeto quiero actualizar por ejemplo*/

router.put('/:id', async (request, response) =>{
    
    //busca por ID (id del objeto que es params que es lo que viene en la URL) que le llega en la base de datos y actualiza con los nuevos datos que traemos (en el cuerpo de la peticion put)
    await baseDatos.findByIdAndUpdate(request.params.id, request.body);

    //console.log(request.params);
    response.send('Recibido y actualizado a base de datos, gracias :)');


});



















//lo exportamos para llamarlo desde fuera
module.exports = router;



