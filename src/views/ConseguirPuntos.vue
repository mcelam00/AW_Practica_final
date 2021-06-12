<template>
<v-container grid-list-xs>
    <v-row>
      <v-col v-for="juego in juegos" :key="juego.nombre" cols="4">
        <v-card class="mx-auto" max-width="550">
          <v-img :src="juego.link"></v-img>

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
        nombre: "Juego1",
        link:
          "/Juego1",
      },
      {
        nombre: "Juego2",
        link:
          "/Juego2",
      },
      
    ],
  }),
};
</script>