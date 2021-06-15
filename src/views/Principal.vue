<template>
  <v-container grid-list-xs>
      <v-row>
        <v-col v-for="album in albumes" :key="album.album.nombre" cols="4">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="album.album.imagen" class="mx-2"></v-img>

            <v-card-title id="titulo"> {{ album.nombre }} </v-card-title>

            <v-card-subtitle>
              Colección de cartas Pokémon intercambiables
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange"
                v-model="album.album.nombre"
                text
                @click="setCurrentColeccion(album)"
              >
                Ver album
              </v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>

        <!---->
      </v-row>
  </v-container>
</template>

<!--  -->

<script>
export default {
  name: "Principal",

  mounted() {
    this.traerColecciones();
    console.log("Colecciones traidas", this.albumes);
  },
  data: () => ({
    overlay: false,
    show: false,
    albumes: null,
  }),

  methods: {
    traerColecciones: function() {
      var request = new XMLHttpRequest();
      request.open("GET", "http://localhost:5000/baseDatos/Colecciones", false); // `false` makes the request synchronous
      request.send(null);

      if (request.status === 200) {
        this.albumes = JSON.parse(request.responseText);
        console.log(this.albumes);
        this.loaded = true;
      }
      
    },
    setCurrentColeccion: function(a) {
      this.$store.dispatch("setCurrentColeccionAction", a);

      this.$router.push({ path: "/ComprarAlbumYCartas" });
    },
  },
};
</script>
