<template>
  <v-card max-width="500">
    <v-card-title> {{ this.titulo }} </v-card-title>
    <v-card-actions>
      <v-text-field v-model="respondido" label="Respuesta"></v-text-field>

      <v-btn
        :color="colorBoton"
        rounded
        @click="comprobarSolucion()"
      >
        Comprobar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    props: {
        titulo : String,
        respuesta : String
    },
  data() {
    return {
        colorBoton:"white",
        respondido: "",
    };
  },

  methods: {
    comprobarSolucion: function() {
        console.log(this.titulo + " " + this.respuesta+ " " +this.respondido)
      if (this.respuesta == this.respondido) {
        this.colorBoton = "green";
      } else {
        this.colorBoton = "red";
      }
    },
  },
};
</script>
