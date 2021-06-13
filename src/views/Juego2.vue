<template>
  <v-container>
<v-card
  class="mx-auto"
    max-width="800">

    <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-counter</v-icon>
            </v-list-item-action>

            <v-list-item-content>
             <v-card-title>
                Puntos Acumulados
            </v-card-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon id="puntuacion"></v-icon>
            </v-list-item-action>
          </v-list-item>

   
    </v-list>


</v-card>


<v-card

    class="mx-auto"
    max-width="800"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      ¡ESA ES LA CUESTIÓN!
    </v-card-title>

    <v-card-subtitle>
      Responde a las preguntas y gana puntos, por cada acierto se sumará un punto
    </v-card-subtitle>

    <v-divider></v-divider>

       <v-btn
      class="ma-2"
      outlined
      color="indigo"
      @click="picoBoton = !picoBoton; ponerACero();traerPregunta()"
      v-if="!picoBoton"
    >
      ¡Comencemos!
    </v-btn>

        <v-card-subtitle  class="title font-weight-light" v-if="picoBoton" id="pregunta"> 
        </v-card-subtitle>


                  <v-btn
                          right
                          absolute
                  class="ma-2"
                  outlined
                  color="indigo"
                   v-if="picoBoton"
@click="comprobarSolucion()"
                >
                  Enviar
                </v-btn>
                
                
              <v-text-field style="width:400px" class="mx-4" 
                v-model="contestacion"
                solo
                label="Respuesta"
                clearable
                v-if="picoBoton"
              ></v-text-field>



    <v-alert type="success" id="solucion" v-show="visible"></v-alert>
    <v-alert id="error" type="error" v-show="visible"></v-alert>

  </v-card>

  </v-container>
</template>



<script>
export default {
  name: "EsaEsLaCuestion",

  data() {

    return {
      visible:false,
    picoBoton:false,
    contestacion:null
    };
  },
  
  methods: {

    ponerACero: function(){
            document.getElementById("puntuacion").innerHTML = 0;

    },

    comprobarSolucion: function(){

      if(this.contestacion != null){

          if(this.contestacion.toUpperCase() == document.getElementById("solucion").innerHTML){
            //Correcto
            document.getElementById("solucion").innerHTML = "Respuesta Correcta : " + document.getElementById("solucion").innerHTML
            document.getElementById("solucion").style.display = "block";
            document.getElementById("puntuacion").innerHTML = parseFloat(document.getElementById("puntuacion").innerHTML) + 1;


            
          }else{
            //Incorrecto
            document.getElementById("error").innerHTML = "Respuesta Correcta : " + document.getElementById("error").innerHTML
            document.getElementById("error").style.display = "block";
            document.getElementById("puntuacion").innerHTML = parseFloat(document.getElementById("puntuacion").innerHTML) - 0.25;


          }      
          //se muestra la solucion correcta 3 segundos y se quita
          //se trae la siguiente pregunta
          setTimeout(this.traerPregunta, 3000);

      }  
      

    },

    siguientePregunta: function(){

        document.getElementById("solucion").style.display = "none";
        document.getElementById("error").style.display = "none";

       

    },


    traerPregunta : function(){
    
        this.siguientePregunta();


       var xhttp = new XMLHttpRequest();
            var url = 'http://localhost:5000/baseDatos/Preguntas';
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

              let objetoPregunta = JSON.parse(this.responseText);
              document.getElementById("pregunta").innerHTML = objetoPregunta.enunciado;
              document.getElementById("solucion").innerHTML = objetoPregunta.solucion;
              document.getElementById("error").innerHTML = objetoPregunta.solucion;

          }
        };
        xhttp.open('GET', url, true);
        xhttp.send();



  },
  guardarPuntos: function () {

    var xhttp = new XMLHttpRequest();
    var url = 'http://localhost:5000/baseDatos/Preguntas/' + document.getElementById("puntuacion").innerHTML;
      
    xhttp.open('GET', url, true);
    xhttp.send();

}
  
  },

  beforeRouteLeave (to, from , next) {
    const answer = window.confirm('¿Seguro que desea abandonar el juego? ¡Ánimo! ¡¡Si ya casi lo tiene!!')
  if (answer) {
    this.guardarPuntos();
    next()
  } else {
    next(false)
   }
}


};

</script>