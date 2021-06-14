<template>
  <v-container fluid class="pa-8">
    <h1>Mi Perfil</h1>
    <h3 class="pb-2" id="puntos"></h3>
    <br />
    <h3>Mis Álbumes:</h3>

    <!---->
    <v-row>
      <v-col v-for="album in albumes" :key="album.nombre" cols="4">
        <v-card max-width="344">
          <v-img :src="album.link" class="mx-2"></v-img>

          <v-card-title> {{ album.nombre }} </v-card-title>

          <!--<v-card-actions>
            <v-btn color="orange lighten-2" text router to="/"> ver mis cartas </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
    <br />
    <h3>Mis cartas:</h3>

    <v-row>
      <v-col v-for="carta in cartas" :key="carta.nombre" cols="2">
        <v-card max-width="250">
          <v-img :src="carta.link" class="mx-2"></v-img>

          <v-card-title> {{ carta.nombre }} </v-card-title>

          <!--<v-card-actions>
            <v-btn color="orange lighten-2" text router to="/"> ver mis cartas </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<!-- -->

<script>
export default {
  name: "Principal",

  mounted() {
      this.cargarPuntos();
    },

  data: () => ({
    puntos: 0,
    albumes: null,
    cartas:null,
  }),
  methods: {
    cargarPuntos: function(){

        var xhttp = new XMLHttpRequest();
        var url = 'http://localhost:5000/baseDatos/traerPuntos';
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

            document.getElementById("puntos").innerHTML = "Saldo de puntos: " + this.responseText;


          }
        };
        xhttp.open('GET', url, true);
        xhttp.send();


    }
  },
};
</script>