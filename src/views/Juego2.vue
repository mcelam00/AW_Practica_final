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
@click="traerPregunta()"
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
    <v-alert type="success">
      I'm a success alert.
    </v-alert>

  </v-card>
</template>




<script>
export default {
  name: "EsaEsLaCuestion",

  data() {
    return {
    picoBoton:false,
    contestacion: ""
    };
  },
  
  methods: {

    traerPregunta : function(){
    
      console.log(this.contestacion)


       var xhttp = new XMLHttpRequest();
            var url = 'http://localhost:5000/Preguntas';
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

              let objetoPregunta = JSON.parse(this.responseText);
              document.getElementById("pregunta").innerHTML = objetoPregunta.enunciado;





          }
        };
        xhttp.open('GET', url, true);
        xhttp.send();





  },
  },
};

</script>