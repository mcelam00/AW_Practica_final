//requerimos express para poder definir las rutas 
const express = require('express');
const { base } = require('../models/socios');
//Para leer del sistema de archivos
const fs = require('fs');



//objeto que tendrá todas las rutas y podremos llamarlo desde cualquier parte
const router = express.Router();

//Importamos los modelos de la base de datos definidos
const socios = require('../models/socios');
const colecciones = require('../models/colecciones');



usuarioActivo = ""; //variable de clase que mantiene la sesion del ususario que está conectado



router.post('/login', async(request, response) => {

    usr = request.body.user;
    contr = request.body.password;

    const soc = await socios.find({ usuario: usr, contrasenya: contr });


    if (soc == "") {
        //No está en la base de datos
        response.send("NO");
    } else {
        //Si está en la base de datos
        usuarioActivo = soc[0].DNI
        if(soc[0].esAdmin == true){
            response.send("ADMIN");

        }else{
            response.send("SI");
        }
    }


});


router.post('/registro', async(request, response) => {


    const socio = new socios(request.body);

    await socio.save();


});

router.get('/Colecciones', async(request, response) => {
    const todasColecciones = await colecciones.find();
    response.json(todasColecciones);

});




router.get('/Preguntas', (request, response) => {

    //Numero aleatorio de 0 a 51 incluidos:
    indice = Math.floor(Math.random() * 52);
    indice = indice + 1

    archivoPreguntas = fs.readFileSync('ganarPuntos/preguntas.json');
    preguntas = JSON.parse(archivoPreguntas);
    //console.log(preguntas['Pregunta'+indice]);
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(preguntas['Pregunta' + indice]));


});


router.get('/Preguntas/:puntosAcumulados', async(request, response) => {

    await socios.findOneAndUpdate({ "DNI": usuarioActivo }, { $inc: { "saldoPuntos": request.params.puntosAcumulados } });

});




router.get('/Juego1/:puntosAcumulados', async(request, response) => {
    console.log("entrasdasda")
    await socios.findOneAndUpdate({ "DNI": usuarioActivo }, { $inc: { "saldoPuntos": request.params.puntosAcumulados } });

});
//este metodo tiene que estar el ultimo
router.get('/traerPuntos', async(request, response) => {

    console.log(usuarioActivo)
    const soc = await socios.find({ DNI: usuarioActivo });

    response.send(JSON.stringify(soc[0].saldoPuntos))

});


router.post('/Administracion/Anyadir', async (request, response) =>{

    const nuevaColeccion = new colecciones(request.body);
    await nuevaColeccion.save();

});

router.get('/traerUsrLoggeado', async(request, response) => {

    const soc = await socios.find({ DNI: usuarioActivo });

    response.send(JSON.stringify(soc[0]));

});


router.post('/Compra/:idCartaComprada', async(request, response) => {

    tieneColeccion = false


    await colecciones.findByIdAndUpdate({_id: request.body._id}, request.body);
    var socio = await socios.find({ DNI: usuarioActivo});

    socioAActualizar = socio[0];

  
    for(j=0; j<socio[0].colecciones.length; j++){

        if(socio[0].colecciones[j].nombre == request.body.nombre){
            tieneColeccion = true



            for(i = 0; i< request.body.cartas.length; i++){
                //hemos encontrado la carta comprada en la coleccion alctualizada que viene
             if(request.body.cartas[i]._id == request.params.idCartaComprada){

                carta = request.body.cartas[i]
                break
             }

        }


        socioAActualizar.colecciones[j].cartas.push(carta)


            break
        }
    }

    
    if( tieneColeccion  == false){
        console.log("NO ESTA")
        //hay que añadir la coleccion con la carta
       

        nuevaColeccion = {
            nombre: "",
            album: {},
            cartas: [],
        }

        for(i = 0; i< request.body.cartas.length; i++){
                //hemos encontrado la carta comprada en la coleccion alctualizada que viene
             if(request.body.cartas[i]._id == request.params.idCartaComprada){

                carta = request.body.cartas[i]
                break
             }

        }
        
        nuevaColeccion.nombre = request.body.nombre;
        nuevaColeccion.cartas.push(carta);
     
       socioAActualizar.colecciones.push(nuevaColeccion);



    }


 //Descontar los puntos

 socioAActualizar.saldoPuntos = socioAActualizar.saldoPuntos - carta.precio


 var socio = await socios.findByIdAndUpdate({ _id: socioAActualizar._id}, socioAActualizar);



});










/*


 
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


*/

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
router.get('/', async(request, response) => {

    const resultadoConsulta = await socios.find(); //un SELECT *
    //El async await obecede a que es asincrono y cuando termine por su cuenta lo grabe en la constante

    console.log(resultadoConsulta);
    response.json(resultadoConsulta); //devolveríamos el json con los datos

});






/*Para que el navegador me pueda traer datos al servidor, usamos post
Método que permite recibir e INSERTAR un objeto del tipo definido en models a la BD*/

router.post('/', async(request, response) => {

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

router.put('/:id', async(request, response) => {

    //busca por ID (id del objeto que es params que es lo que viene en la URL) que le llega en la base de datos y actualiza con los nuevos datos que traemos (en el cuerpo de la peticion put)
    await socios.findByIdAndUpdate(request.params.id, request.body);

    //console.log(request.params);
    response.send('Recibido y actualizado a base de datos');


});








router.delete('/:id', async(request, response) => {

    //con el id que nos llegue, se lo pasamos a la funcion, busca por ID en la base de datos y lo elimina
    await socios.findByIdAndRemove(request.params.id);

    response.send('Recibido y borrado en la base de datos');

});

















//lo exportamos para llamarlo desde fuera
module.exports = router;