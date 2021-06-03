
<template>
  <v-container grid-list-xs>
    <h1 >miperfil</h1>

    <v-row>
      <v-col v-for="carta in cartas" :key="carta.nombre" cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="carta.link"></v-img>

          <v-card-title> {{ carta.nombre }} </v-card-title>

          <v-card-subtitle>
            Cuesta {{ carta.precio }} puntos <br />Quedan
            {{ carta.quedan }} unidades</v-card-subtitle
          >

          <v-card-actions>
            <v-btn color="orange lighten-2" text> comprar </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text> pokemon tipo mis huevos </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<!-- -->

<script>
export default {
  name: "Principal",

  data: () => ({
    show: false,
    cartas: [
      {
        nombre: "Album Pokémon tipo Agua",
        link:
          "https://images-na.ssl-images-amazon.com/images/I/91sx24Dup3L._AC_SL1500_.jpg",
        precio: "3",
        quedan: "5",
      },
      {
        nombre: "Album Pokémon tipo Fuego",
        link:
          "https://images-na.ssl-images-amazon.com/images/I/81Q7vXrh6LL._AC_SL1500_.jpg",
        precio: "2",
        quedan: "3",
      },
      {
        nombre: "Album Pokémon tipo Planta",
        link:
          "https://images-na.ssl-images-amazon.com/images/I/91MJcZ2oZ3L._AC_SL1500_.jpg",
        precio: "4",
        quedan: "4",
      },
    ],
  }),
};
</script>