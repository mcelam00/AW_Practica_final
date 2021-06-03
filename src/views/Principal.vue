
<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col v-for="carta in cartas" :key="carta.nombre" cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="carta.link" height="200px"></v-img>

          <v-card-title> {{ carta.nombre }} </v-card-title>

          <v-card-subtitle> 1,000 millon de pesetas </v-card-subtitle>

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


<!-- <template>
  <v-container class="my-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="carta in cartas" :key="carta.nombre">
        <v-card class="ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="200">
              <img class="pl-" :src="carta.link" />
            </v-avatar>
          </v-responsive>
          <v-card-title class="justify-center">
            {{ carta.nombre }}
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small>comprar</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template> -->

<script>
export default {
  name: "Principal",

  data: () => ({
    show: false,
    cartas: [
      {
        nombre: "pokimon1",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      },
      {
        nombre: "pokimon2",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      },
      {
        nombre: "pokimon3",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      },
      {
        nombre: "pokimon4",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      },
      {
        nombre: "pokimon5",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      },
      {
        nombre: "pokimon6",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      },
      {
        nombre: "pokimon7",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      },
      {
        nombre: "pokimon8",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      },
      {
        nombre: "pokimon9",
        link: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      },
    ],
  }),
};
</script>