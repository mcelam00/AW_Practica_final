 <template>
  <v-main>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>kiosco de pokimons</v-toolbar-title>
      
      

    </v-app-bar>

    <!--  -->
  </v-main>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>