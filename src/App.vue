<template>
  <v-app app>

    <navbar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar},
  name: "App",

  
};
</script>
