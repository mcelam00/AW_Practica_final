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

    response.send("Registro Exitoso")

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
    response.send("Total actualizado")
});




router.get('/Juego1/:puntosAcumulados', async(request, response) => {
    console.log("entrasdasda")
    await socios.findOneAndUpdate({ "DNI": usuarioActivo }, { $inc: { "saldoPuntos": request.params.puntosAcumulados } });
    response.send("Punto sumado")
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
    response.send("Añadida nueva Colección")

});

router.get('/traerUsrLoggeado', async(request, response) => {

    const soc = await socios.find({ DNI: usuarioActivo });

    response.send(JSON.stringify(soc[0]));

});


router.post('/Compra/:nombreCartaComprada', async(request, response) => {

   var carta = {}
console.log("1.");
    await colecciones.findByIdAndUpdate({_id: request.body._id}, request.body);
console.log("2.");

    var socio = await socios.find({ DNI: usuarioActivo});
console.log("3.");

   var socioAActualizar = socio[0];

  
    for(j=0; j<socio[0].colecciones.length; j++){

        if(socio[0].colecciones[j].nombre == request.body.nombre){
            console.log("4.");


            for(i = 0; i< request.body.cartas.length; i++){
                //hemos encontrado la carta comprada en la coleccion alctualizada que viene
             if(request.body.cartas[i].nombre == request.params.nombreCartaComprada){
                console.log("5.");

                carta = request.body.cartas[i]
                console.log(carta)
                break
             }

            }

/*

            //recorremos las colecciones del socio para ver si ya tiene un ejemplar igual
            for(k=0; k<socio[0].colecciones.length; k++){

                for(l=0; l<socio[0].colecciones[k].cartas.length; l++){

                    if(carta.nombre == socio[0].colecciones[k].cartas[l].nombre){
                        console.log("6.");

                        //hay ya una carta con el mismo nombre en la base de datos 
                            response.send("ERROR_EJEMPLAR_ADQUIRIDO")
                            
                    }

                }

            }

*/


            //Grabo la nueva carta al socio

            socioAActualizar.colecciones[j].cartas.push(carta)
            console.log("7.");

            break
        }
    }

    /* NO SE NOS DA EL CASO
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
             if(request.body.cartas[i].nombre == request.params.nombreCartaComprada){

                carta = request.body.cartas[i]
                break
             }

        }
        
        nuevaColeccion.nombre = request.body.nombre;
        nuevaColeccion.cartas.push(carta);
     
       socioAActualizar.colecciones.push(nuevaColeccion);



    }
*/





 //Descontar los puntos

 socioAActualizar.saldoPuntos = socioAActualizar.saldoPuntos - carta.precio
 console.log("8.");


await socios.findByIdAndUpdate({ _id: socioAActualizar._id}, socioAActualizar);

console.log("9.")
response.send("Carta comprada con éxito");


});

router.post('/CompraAlbum/:nombreColeccion', async(request, response) => {
console.log("1.")
    var soc = await socios.find({ DNI: usuarioActivo});
console.log("2.")
    var socioAActualizar = soc[0];

     //no existe la colección
   var  nuevaColeccion = {
        nombre: "",
        album: {},
        cartas: [],
    }
console.log("3.")
    nuevaColeccion.nombre = request.params.nombreColeccion;
    nuevaColeccion.album = request.body;

    socioAActualizar.colecciones.push(nuevaColeccion);
    console.log("4.")
/*
    for(i = 0 ; i < socioAActualizar.colecciones.length; i++){
       
        if(socioAActualizar.colecciones[i].nombre == request.params.nombreColeccion){
              
            
            //ya existe la colección: NO SE DA EL CASO            
    
        }else{

           
            
               
                break
        }
    }

    */
 //Descontar los puntos

 socioAActualizar.saldoPuntos = socioAActualizar.saldoPuntos - request.body.precio

 console.log("5.")
 await socios.findByIdAndUpdate({ _id: socioAActualizar._id}, socioAActualizar);

 console.log("6.")
 response.send("Album comprado con éxito");

});


router.post('/Administracion/sumaExistencias', async (request, response) =>{
    await colecciones.findByIdAndUpdate({_id: request.body._id}, request.body);
    response.send("Existencia incrementada")
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