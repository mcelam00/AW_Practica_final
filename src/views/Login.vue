<template>
  <v-app>
    <v-content>
      <v-toolbar dense color="toolbarLogin" class="font-weight-medium">
      </v-toolbar>

      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card width="600" class="mx-auto mt-5" justify="center" color="cardAnalisis">
              <v-card-title>
                <h1 class="font-weight-medium">Login</h1>
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="name"
                    label="Usuario"
                    prepend-icon="mdi-account-circle"
                    type="text"
                  />
                  <v-text-field
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  />
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="recuperarclave"
          dark
          v-bind="attrs"
          v-on="on"
          class="text-decoration-underline"
        >
          Recuperar contraseña
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            

            <v-list-item-content>
              <v-list-item-title>¿Cómo recuperar contraseña?</v-list-item-title>
              <v-list-item-subtitle>Para recuperar la contraseña, llama al numero +34987654321</v-list-item-subtitle>
            </v-list-item-content>

           
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
      </v-card>
    </v-menu>
  </div>
</template>
                
                <v-spacer></v-spacer>
                <v-btn color="success" :to="{ path: '/' }" >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer class="toolbarLogin">
      <v-card-text class=" .font-italic font-weight-bold text-center">
        &copy;2021 — <strong>KIOSKO POKIMONS</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      name: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      console.log("loggeado");
    },
  },
  components: {},
};
</script>