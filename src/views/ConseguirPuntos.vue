<template>
<v-container grid-list-xs>
    <v-row>
      <v-col v-for="juego in juegos" :key="juego.nombre" cols="6" >
        <v-card max-width="750" height="485">
          <v-img height="350" contain :src="juego.foto"  ></v-img>

          <v-card-title> {{ juego.nombre }} </v-card-title>

          <v-card-actions>
            <v-btn text color="orange" router :to = "juego.link"> Jugar </v-btn>
            
            <v-spacer></v-spacer>

            
          </v-card-actions>

          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ConseguirPuntos",

  data: () => ({
    show: false,
    juegos: [
      {
        nombre: "Pon a prueba tus matemáticas",
        link:
          "/Juego1",
        foto: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/03/fondo-matematicas_23-2148146270.jpg.webp",
      },
      {
        nombre: "Esa es la cuestión!",
        link:
          "/Juego2",
        foto: "https://testdivertidos.net/media/test-cultura-general/0-.jpg",
      },
      
    ],
  }),
};
</script>