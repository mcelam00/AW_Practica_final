<template>
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
      @click="picoBoton = !picoBoton; traerPregunta()"
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
</template>



<script>
export default {
  name: "EsaEsLaCuestion",

  data() {
    return {
      visible:false,
    picoBoton:false,
    contestacion: ""
    };
  },
  
  methods: {
    comprobarSolucion: function(){

      if(this.contestacion.toUpperCase() == document.getElementById("solucion").innerHTML){
        document.getElementById("solucion").style.display = "block";
      }else{
        document.getElementById("error").style.display = "block";

      }      

     

    },

    siguientePregunta: function(){

        document.getElementById("solucion").style.display = "none";
        document.getElementById("error").style.display = "none";



    },


    traerPregunta : function(){
    


       var xhttp = new XMLHttpRequest();
            var url = 'http://localhost:5000/Preguntas';
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

              let objetoPregunta = JSON.parse(this.responseText);
              document.getElementById("pregunta").innerHTML = objetoPregunta.enunciado;
              document.getElementById("solucion").innerHTML = "Respuesta Correcta : " + objetoPregunta.solucion;
              document.getElementById("error").innerHTML = "Respuesta Correcta : " + objetoPregunta.solucion;




          }
        };
        xhttp.open('GET', url, true);
        xhttp.send();





  },
  },
};

</script>