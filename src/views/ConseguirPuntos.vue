<template>
<v-container>
  <v-card
    class="mx-auto mt-8"
    max-width="700"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Pregunta 1
        </div>
        <v-list-item-title class="text-h5 mb-1">
          ¿Santiago es otaku?
        </v-list-item-title>
      </v-list-item-content>

     
    </v-list-item>
    

    <v-card-actions>
<v-text-field
            v-model="title"
            :rules="respuesta1"
            label="Respuesta"
          ></v-text-field>   
<v-btn
        outlined
        rounded
        text
      >
        Comprobar
      </v-btn>
    </v-card-actions>
    
    <!--inicio de la siguiente pregunta-->


    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Pregunta 2
        </div>
        <v-list-item-title class="text-h5 mb-1">
          ¿?
        </v-list-item-title>
      </v-list-item-content>

     
    </v-list-item>
    <v-card-actions>
<v-text-field
            v-model="title"
            :rules="respuesta"
            label="Respuesta"
          ></v-text-field>   
<v-btn
        outlined
        rounded
        text
      >
        Comprobar
      </v-btn>
    </v-card-actions>
    <!--inicio de la siguiente pregunta-->


    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Pregunta 3
        </div>
        <v-list-item-title class="text-h5 mb-1">
          ¿?
        </v-list-item-title>
      </v-list-item-content>

     
    </v-list-item>
    <v-card-actions>
<v-text-field
            v-model="title"
            :rules="respuesta"
            label="Respuesta"
          ></v-text-field>   
<v-btn
        outlined
        rounded
        text
      >
        Comprobar
      </v-btn>
    </v-card-actions>
    <!--inicio de la siguiente pregunta-->


    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Pregunta 4
        </div>
        <v-list-item-title class="text-h5 mb-1">
          ¿?
        </v-list-item-title>
      </v-list-item-content>

     
    </v-list-item>
    <v-card-actions>
<v-text-field
            v-model="title"
            :rules="respuesta"
            label="Respuesta"
          ></v-text-field>   
<v-btn
        outlined
        rounded
        text
      >
        Comprobar
      </v-btn>
    </v-card-actions>
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


              



  </v-card>




  <v-footer>
      <v-card-text class=".font-italic font-weight-bold text-center">
        &copy;2021 — <strong>KIOSKO POKIMONS</strong>
      </v-card-text>
    </v-footer>
    </v-container>
</template>



<script>
export default {
  name: "ConseguirPuntos",

  data() {
    return {
      solucion1 : "si",
    picoBoton:false,
    contestacion: ""
    };
  },
  
  methods: {
    comprobarSolucion: function () {

    },
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