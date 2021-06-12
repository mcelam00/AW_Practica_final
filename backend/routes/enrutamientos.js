//requerimos express para poder definir las rutas 
const express = require('express');
const { base } = require('../models/socios');



//objeto que tendrá todas las rutas y podremos llamarlo desde cualquier parte
const router = express.Router();

//Importamos los modelos de la base de datos definidos
const socios = require('../models/socios');
const colecciones = require('../models/colecciones');






 
router.get('/users/:nombreSocio', async (request, response) =>{
    
    //find() retorna un puntero a un result set sobre el que se puede iterar, expiran a los 10 mins
    //aqui restrinjo para que sea solo el que quiero
    
    const soc = await socios.find(
        //{ "nombre": request.params.nombreSocio }
        { nombre: request.params.nombreSocio}
    );

 
    console.log("Nombre:", soc[0].nombre)
    console.log("Apellidos:", soc[0].apellidos)
    console.log("DNI:", soc[0].DNI)
    console.log("Usuario:", soc[0].usuario)
    console.log("Contraseña:", soc[0].contrasenya)
    console.log("Correo Electronico:", soc[0].correoElectronico)
    console.log("Puntos:", soc[0].saldoPuntos)

    response.json(soc[0])

});


router.post('/login', (request, response) =>{

    console.log("hola")
    console.log(request.body)


});


router.post('/registro', async (request, response) =>{


    console.log(request.body)
    const socio = new socios(request.body);

    await socio.save();


});

router.get('/Colecciones', async (request, response)=>{
console.log("frito")
    const todasColecciones = await colecciones.find();
    console.log(todasColecciones)
    response.json(todasColecciones);

});













/*
router.post('/Colecciones/meter', async (request, response)=>{
console.log("METIENDO COLECCION")
    //creamos una nueva instancia, como en hibernate los objetos que luego van a la base de datos
    const coleccion = new colecciones(request.body);
 


    await coleccion.save(); //lo llevamos a la base de datos, y lo hacemos asincronamente porque puede requerir tiempo

    response.send('Recibido y guardado a base de datos, gracias :)');

});

*/



















/*Al pedir el directorio raíz QUE ASUMIMOS DENTRO DE /baseDatos se hace una consulta de todo lo guardado en la BD*/
router.get('/', async (request, response) =>{
    
    const resultadoConsulta = await socios.find(); //un SELECT *
    //El async await obecede a que es asincrono y cuando termine por su cuenta lo grabe en la constante

    console.log(resultadoConsulta);
    response.json(resultadoConsulta); //devolveríamos el json con los datos

});






/*Para que el navegador me pueda traer datos al servidor, usamos post
Método que permite recibir e INSERTAR un objeto del tipo definido en models a la BD*/

router.post('/', async (request, response) =>{

    //la consulta aqui será insertar datos. Los datos vienen en el cuerpo al ser un post
    //creamos una nueva instancia, como en hibernate los objetos que luego van a la base de datos
    const socio = new socios(request.body);
    
    //console.log(request.body);
    
    //console.log(new baseDatos());

    console.log(socio);

    await socio.save(); //lo llevamos a la base de datos, y lo hacemos asincronamente porque puede requerir tiempo

    response.send('Recibido y guardado a base de datos, gracias :)');

});










/*ACTUALIZAR EN LA BASE DE DATOS - Método put
En la URL indico que objeto quiero actualizar por ejemplo*/

router.put('/:id', async (request, response) =>{
    
    //busca por ID (id del objeto que es params que es lo que viene en la URL) que le llega en la base de datos y actualiza con los nuevos datos que traemos (en el cuerpo de la peticion put)
    await socios.findByIdAndUpdate(request.params.id, request.body);

    //console.log(request.params);
    response.send('Recibido y actualizado a base de datos');


});








router.delete('/:id', async (request, response) =>{

    //con el id que nos llegue, se lo pasamos a la funcion, busca por ID en la base de datos y lo elimina
    await socios.findByIdAndRemove(request.params.id);

    response.send('Recibido y borrado en la base de datos');

});

















//lo exportamos para llamarlo desde fuera
module.exports = router;



