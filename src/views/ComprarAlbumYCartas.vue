<template>
  <v-container grid-list-xs>
    <h1>{{ this.album.nombre }}</h1>

    <v-card class="" max-width="300">
      <v-img :src="this.album.imagen" class="mx-2 "></v-img>

      <v-card-title> {{ this.album.nombre }} </v-card-title>

      <v-card-subtitle> Precio: {{ this.album.precio }} puntos</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange" text absolute right class="mb-8" @click="comprarAlbum(album)"> comprar </v-btn>

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
            <v-btn
              color="orange"
              text
              absolute
              right
              class="mb-8"
              @click="comprar(item)"
            >
              comprar
            </v-btn>

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
  },

  data: () => ({
    albumYCartas: null,
    album: null,
    cartas: null,
  }),

  methods: {
    comprar: function(item) {
      console.log(item);

      //Descontar puntos al usuario



      //Descontar existencia al kiosco
      if (item.quedan >= 1) {
        item.quedan = item.quedan - 1;
        var xhttp = new XMLHttpRequest();
        console.log(item._id)
        console.log(item.nombre)
        var url = "http://localhost:5000/baseDatos/Compra" +"/"+ item.nombre;
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == "ERROR_EJEMPLAR_ADQUIRIDO"){
              alert("Ya dispone de esa carta en su album");
            }
          }
        };

        xhttp.open("POST", url, false);
        xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
        xhttp.setRequestHeader(
          "Content-type",
          "application/json; charset=utf-8"
        );
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

        xhttp.send(JSON.stringify(this.albumYCartas));
      }
      else{
        alert("No quedan cartas, solo maxibon");
      }

      //this.albumYCartas.cartas.quedan = this.albumYCartas.cartas.quedan -1;
      //actualizar la base

      //Mandar el nombre de la carta

      //this.$store.dispatch("updateCollectionAction", this.albumYCartas);
    },
    comprarAlbum: function(album){

        var xhttp = new XMLHttpRequest();
        var url = "http://localhost:5000/baseDatos/CompraAlbum"+"/"+this.albumYCartas.nombre;
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
          }
        };

        xhttp.open("POST", url, false);
        xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
        xhttp.setRequestHeader(
          "Content-type",
          "application/json; charset=utf-8"
        );
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

        xhttp.send(JSON.stringify(album));


    },
  },

  components: {},
};
</script>
