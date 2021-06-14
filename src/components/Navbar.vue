<template>
  <v-main>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->

      <div v-if="$store.getters.logueado">
        <v-card flat class="mx-16">
          <v-avatar size="120">
            <v-img src="https://thispersondoesnotexist.com/image"></v-img>
          </v-avatar>

          <v-card-title> Nombre </v-card-title>

          <v-card-subtitle> Apellido</v-card-subtitle>
          <v-btn class="mb-4" color="primary" router to="/MiPerfil">
            <span>Mi perfil</span>
            <v-icon right>mdi-account-circle</v-icon>
          </v-btn>
        </v-card>
        <v-divider></v-divider>
        <v-list>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.ruta"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>

      <div v-if="!$store.getters.logueado">
        <v-card v-if="!$store.getters.logueado" flat class="ma-4">
          <h3 class="font-weight-light grey lighten-2 pa-2">
            Inicia sesión para acceder a tu perfil y comprar cartas
          </h3>
        </v-card>
        <v-divider></v-divider>

        <v-list v-if="!$store.getters.logueado">
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item router to="/">
              <v-list-item-icon>
                <v-icon>mdi-cards</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Colecciones</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> <h2>Kiosco de Pokimons</h2> </v-toolbar-title>
      <h2>{{ $store.getters.logueado }}</h2>
      <v-btn
        v-if="$store.getters.logueado"
        color="primary"
        @click="changeStateLogueado"
        absolute
        right
      >
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <v-btn
        v-if="!$store.getters.logueado"
        absolute
        right
        color="primary"
        router
        to="/Login"
      >
        <span>Sign In</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!--  -->
  </v-main>
</template>

<script>
import store from "../store";
export default {
  data: () => ({
    selectedItem: null,
    drawer: false,
    //isLogueado: $store.state.logueado,
    items: [
      { text: "Colecciones", icon: "mdi-cards", ruta: "/" },
      //{ text: "Audience", icon: "mdi-account", ruta: "/Principal" },
      {
        text: "Conseguir Puntos",
        icon: "mdi-currency-usd",
        ruta: "/ConseguirPuntos",
      },
    ],
    btnAdministrar: {
      text: "Administrar",
      icon: "mdi-start",
      ruta: "/Administracion",
    },
  }),
  computed: {},
  methods: {
    changeStateLogueado() {
      console.log("metodo de navbar");
      this.$store.dispatch("changeStateLogueadoAction");
    },
  },
};
</script>
