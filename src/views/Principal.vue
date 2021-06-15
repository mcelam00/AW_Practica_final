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
      /*
      console.log("pedido");
      var xhttp = new XMLHttpRequest();
      var url = "http://localhost:5000/baseDatos/Colecciones";
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //this.computed.mostrarColecciones(JSON.parse(this.responseText))
          this.albumes = JSON.parse(this.responseText);

          this.loaded = true;
          console.log("loaded cambiado");
          console.log(this.albumes, "los albumes");

          console.log(this.responseText)
          
          });

          document.getElementById("tituloc1").innerHTML = JSON.parse(
            this.responseText
          )[0].nombre;
          document.getElementById("col1").src = JSON.parse(
            this.responseText
          )[0].album.imagen;
 
          document.getElementById("tituloc2").innerHTML = JSON.parse(
            this.responseText
          )[1].nombre;
          document.getElementById("col2").src = JSON.parse(
            this.responseText
          )[1].album.imagen;
        }
      };
      xhttp.open("GET", url, false);
      xhttp.send();
    */
    },
    setCurrentColeccion: function(a) {
      this.$store.dispatch("setCurrentColeccionAction", a);

      this.$router.push({ path: "/ComprarAlbumYCartas" });
    },
  },
};
</script>
