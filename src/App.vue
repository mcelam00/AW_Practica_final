<template>
  <v-app app>
    <navbar />

    <v-content class="mx-2 mb-4 pt-0">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>
