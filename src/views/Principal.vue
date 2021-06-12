
<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col v-for="album in albumes" :key="album.nombre" cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="album.link"></v-img>

          <v-card-title id="titulo"> {{ album.nombre }} </v-card-title>

          <v-card-subtitle> 1,000 millones de pesetas </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text route to = "/ComprarAlbumYCartas"> comprar </v-btn>

            <v-spacer></v-spacer>

            
          </v-card-actions>

          
        </v-card>

      </v-col>

    <v-col >
        <v-card class="mx-auto" max-width="344">
          <img id="col1" style="width: 344px; "/>
          <v-card-title id="tituloc1"> </v-card-title>

          <v-card-subtitle> 1,000 millones de pesetas </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text route to = "/ComprarAlbumYCartas"> comprar </v-btn>

            <v-spacer></v-spacer>

            
          </v-card-actions>

          
        </v-card>

      </v-col>

   <v-col >
        <v-card class="mx-auto" max-width="344">
          <img id="col2" style="width: 344px; "/>
          <v-card-title id="tituloc2"> </v-card-title>

          <v-card-subtitle> 1,000 millones de pesetas </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text route to = "/ComprarAlbumYCartas"> comprar </v-btn>

            <v-spacer></v-spacer>

            
          </v-card-actions>

          
        </v-card>

      </v-col>





    </v-row>
  </v-container>
</template>


<!--  -->

<script>
export default {
  name: "Principal",

  mounted() {
      this.traerColecciones();
    },
      data() {
    return {
      show: false,
      albumes: [],
     
    };
  },

   methods: {

    traerColecciones : function(){

        var xhttp = new XMLHttpRequest();
        var url = 'http://localhost:5000/baseDatos/Colecciones';
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {


           document.getElementById('tituloc1').innerHTML = JSON.parse(this.responseText)[0].nombre;
           document.getElementById('col1').src= JSON.parse(this.responseText)[0].album.imagen;

          document.getElementById('tituloc2').innerHTML = JSON.parse(this.responseText)[1].nombre;
          document.getElementById('col2').src= JSON.parse(this.responseText)[1].album.imagen;


          }
        };
        xhttp.open('GET', url, true);
        xhttp.send();

    }
   }
};
</script>