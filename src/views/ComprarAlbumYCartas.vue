<template>
     <v-container grid-list-xs>
    <v-row>
      <v-col v-for="album in albumes" :key="album.nombre" cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="album.link"></v-img>

          <v-card-title> {{ album.nombre }} </v-card-title>

          <v-card-subtitle> 1,000 millones de pesetas </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text @click="login"> comprar </v-btn>

            <v-spacer></v-spacer>

            
          </v-card-actions>

          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>





<script>

export default {
  name: "ComprarAlbumYCartas",
  
   data: () => ({

       albumes: [
      {
        nombre: "Album Pokémon tipo Agua",
        link:
          "https://images-na.ssl-images-amazon.com/images/I/91sx24Dup3L._AC_SL1500_.jpg",
      },
      {
        nombre: "Album Pokémon tipo Fuego",
        link:
          "https://images-na.ssl-images-amazon.com/images/I/81Q7vXrh6LL._AC_SL1500_.jpg",
      },
      {
        nombre: "Album Pokémon tipo Planta",
        link:
          "https://images-na.ssl-images-amazon.com/images/I/91MJcZ2oZ3L._AC_SL1500_.jpg",
      },
    ],


   }),

  methods: {
    login: function() {
            var xhttp = new XMLHttpRequest();
            var url = 'http://localhost:5000/BaseDatos';
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
          }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    },
  },

  components: {},


};

</script>
