//Requerimos el módulo express de nodejs
const express = require('express');
//Inicializamos express y ejecutamos el framework. App es de ahora en adelante el servidor
const app = express();


/*CONFIGURACIONES*/
app.set('port', process.env.PORT || 5000); //se usará el puerto que proporcione el servicio cloud/S.O./máquina servidor y sino el 8080



/*MIDDLEWARE*/




/*ROUTES*/




//Ponemos a escuchar el servidor
app.listen(app.get('port') , () =>{
    console.log('El servidor se encuentra escuchando en el puerto', app.get('port'));
});