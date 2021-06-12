<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card
              width="600"
              class="mx-auto mt-5"
              justify="center"
              color="cardAnalisis"
            >
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
              
              <v-alert id="error"
                type="error"
              v-show="visible"
              >El usuario y contraseña no corresponden con ninguno presente en la base de datos</v-alert>


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


                        <v-btn
                          right
                          absolute
                          color="success"
                          @click="login();mandarDatos();"
                          >Login</v-btn
                        >
                      </template>

                      <v-card>
                        <v-list>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                >¿Cómo recuperar contraseña?</v-list-item-title
                              >
                              <v-list-item-subtitle
                                >Para recuperar la contraseña, llama al numero
                                +666666666
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>

                        <v-divider></v-divider>
                      </v-card>
                    </v-menu>
                  </div> </template></v-card-actions></v-card></v-col></v-row></v-container
    ></v-content>

    <!--:to="{ path: '/' }"-->

    <v-footer class="toolbarLogin">
      <v-card-text class=".font-italic font-weight-bold text-center">
        &copy;2021 — <strong>KIOSKO POKIMONS</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  
  data (){
    
    return{
        visible:false,
          showPassword: false,
          name: "",
          password: "",
    }
  },
  methods: {
    login: function () {
      console.log("loggeado");
 
    },

    mandarDatos: function () {
      console.log("gracias al v-model");
      console.log("Nombre =", this.name);
      console.log("Palabra de paso = ", this.password);

      //peticion post que comprueba el loggueo
      var xhttp = new XMLHttpRequest();
      var url = "http://localhost:5000/baseDatos/login";
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
           if(this.responseText == "NO"){
                document.getElementById("error").style.display = "block";
           }else{
              window.location.href = '/#/MiPerfil';
           }       
        
        }
      };

      xhttp.open("POST", url, true);
      xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
      xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

      xhttp.send(JSON.stringify({ user: this.name, password: this.password }));
    },
  },
  components: {},
};
</script>