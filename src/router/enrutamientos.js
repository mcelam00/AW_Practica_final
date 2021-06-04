//requerimos express para poder definir las rutas 
const express = require('express');

//objeto que tendrá todas las rutas y podremos llamarlo desde cualquier parte
const router = express.Router();





/*Pedir el directorio raíz se responde un msj*/
router.get('/', (request, response) =>{
    response.send('PROBANDO PROBANDO');
});







//lo exportamos para llamarlo desde fuera
module.exports = router;



