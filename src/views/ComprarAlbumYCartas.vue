<template>
  <v-container grid-list-xs>
    <h1>{{ this.album.nombre }}</h1>

    <v-card class="" max-width="300">
      <v-img :src="this.album.imagen" class="mx-2 "></v-img>

      <v-card-title> {{ this.album.nombre }} </v-card-title>

      <v-card-subtitle> Precio: {{ this.album.precio }} puntos</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange" text absolute right class="mb-8"> comprar </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>

    <h1 class="mt-6">Cartas</h1>

    <v-row>
      <v-col v-for="(item, i) in cartas" :key="i" cols="3">
        <v-card class="mx-auto" max-width="290">
          <v-img :src="item.imagen" class="mx-2"></v-img>

          <v-card-title> {{ item.nombre }} </v-card-title>

          <v-card-subtitle>
            Precio: {{ item.precio }} puntos <br />Quedan:
            {{ item.quedan }} unidades
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text absolute right class="mb-8"> comprar </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "../store";

export default {
  name: "ComprarAlbumYCartas",

  mounted() {
    console.log("desde comprar", store.getters.currentColeccion);
    this.albumYCartas = store.getters.currentColeccion;
    this.album = this.albumYCartas.album;
    this.cartas = this.albumYCartas.cartas;
    //console.log("desde comprar album", this.album);
    //console.log("desde comprar cartas", this.cartas);
    //console.log("desde comprar cartas", store.getters.currentColeccion);
    //console.log("preloaded",this.albumes);
  },

  data: () => ({
    albumYCartas: null,
    album: null,
    cartas: null,
  }),

  methods: {
    login: function() {
      var xhttp = new XMLHttpRequest();
      var url = "http://localhost:5000/BaseDatos";
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
    },
  },

  components: {},
};
</script>
