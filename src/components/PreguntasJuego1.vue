<template>
  <v-card max-width="500">
    <v-card-title> {{ this.titulo }} </v-card-title>
    <v-card-actions>
      <v-text-field v-model="respondido" label="Respuesta"></v-text-field>

      <v-btn :color="colorBoton" rounded @click="comprobarSolucion()">
        Comprobar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
var puntos = 0;
export default {
  props: {
    titulo: String,
    respuesta: String,
  },
  data() {
    return {
      colorBoton: "white",
      respondido: "",
    };
  },

  methods: {
    comprobarSolucion: function() {
      if (this.respuesta == this.respondido) {
        this.colorBoton = "green";
        puntos += 1;
        this.enviarPuntos(puntos);
      } else {
        this.colorBoton = "red";
      }
    },
    enviarPuntos: function(puntos) {
      var xhttp = new XMLHttpRequest();
      var url =
        "http://localhost:5000/baseDatos/Juego1/" + puntos;

      xhttp.open("GET", url, true);
      xhttp.send();
    },
  },
};
</script>
