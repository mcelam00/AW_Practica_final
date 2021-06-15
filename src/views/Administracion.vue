<template>
  <v-container>
    <v-card class="mx-auto" max-width="1000">
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-cogs</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-card-title> ADMINISTRACIÓN DEL KIOSKO </v-card-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mx-auto" max-width="1000">
      <v-card-title> NUEVA COLECCIÓN </v-card-title>

      <v-row>
        <v-col cols="12" md="4">
          <v-card-subtitle class="title font-weight-light">
            Nombre Colección
          </v-card-subtitle>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field
            v-model="nombreColeccion"
            label=""
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card-subtitle class="title font-weight-light">
            Número de Cromos Añadidos
          </v-card-subtitle>
        </v-col>
        <v-col>
          <v-card-subtitle class="title font-weight-light">
            <v-icon id="numeroCromos"></v-icon>
          </v-card-subtitle>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1" md="4">
          <v-card-subtitle class="title font-weight-light">
            Álbum
          </v-card-subtitle>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="spacing-playground pl-16">
          <v-card-subtitle
            class="title font-weight-light spacing-playground ml-16"
          >
            Nombre
          </v-card-subtitle>
        </v-col>

        <v-col cols="2" md="5">
          <v-text-field v-model="nombreAlbum" label="" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="spacing-playground pl-16">
          <v-card-subtitle
            class="title font-weight-light spacing-playground ml-16"
          >
            Imagen
          </v-card-subtitle>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field v-model="imagenAlbum" label="" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="spacing-playground pl-16">
          <v-card-subtitle
            class="title font-weight-light spacing-playground ml-16"
          >
            Precio
          </v-card-subtitle>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field v-model="precioAlbum" label="" required></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="end" class="pr-16 pb-16 pt-10">
        <v-btn color="secondary" elevation="6" @click="guardarColeccion()"
          >Guardar Colección</v-btn
        >
      </v-row>
    </v-card>
    <v-spacer class="pt-10"></v-spacer>

    <v-card class="mx-auto" max-width="1000">
      <v-card-title> NUEVO CROMO </v-card-title>

      <v-row>
        <v-col cols="12" md="4" class="spacing-playground pl-16">
          <v-card-subtitle
            class="title font-weight-light spacing-playground ml-16"
          >
            Nombre
          </v-card-subtitle>
        </v-col>

        <v-col cols="2" md="5">
          <v-text-field v-model="nombreCromo" label="" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="spacing-playground pl-16">
          <v-card-subtitle
            class="title font-weight-light spacing-playground ml-16"
          >
            Imagen
          </v-card-subtitle>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field v-model="imagenCromo" label="" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="spacing-playground pl-16">
          <v-card-subtitle
            class="title font-weight-light spacing-playground ml-16"
          >
            Precio
          </v-card-subtitle>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field v-model="precioCromo" label="" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="spacing-playground pl-16">
          <v-card-subtitle
            class="title font-weight-light spacing-playground ml-16"
          >
            Existencias
          </v-card-subtitle>
        </v-col>

        <v-col cols="12" md="5">
          <v-text-field v-model="existenciasCromo" required></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="end" class="pr-16 pb-16 pt-10">
        <v-btn color="secondary" elevation="6" @click="nuevoCromo()"
          >Añadir cromo</v-btn
        >
      </v-row>
    </v-card>

    <v-spacer class="pt-10"></v-spacer>

    <v-card class="mx-auto" max-width="1000">
      <v-card-title> COLECCIONES ACTUALES </v-card-title>

      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(col, i) in todasColecciones" :key="i">
            <v-list-item-content>
              <v-card-subtitle class="title font-weight-light">
                {{ col.nombre }}
              </v-card-subtitle>
              <v-list-item v-for="(cromo, j) in col.cartas" :key="j">
                <v-list-item-content>
                  <v-card-subtitle
                    class="title font-weight-light spacing-playground ml-16"
                  >
                    {{cromo.nombre+" --> "+"Existencias: "+cromo.quedan}}
                    <v-btn
                      absolute
                      right
                      color="secondary"
                      elevation="6"
                      @click="cromo.quedan = cromo.quedan+1;actualizarExistencia(col);"
                      >+</v-btn
                    >
                  </v-card-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>









<script>
var cromosAniadidos = 0;
var cromos = [];

export default {
  name: "Administracion",

  mounted() {
    document.getElementById("numeroCromos").innerHTML = cromosAniadidos;
    this.traerColecciones();
    //ya tengo aqui todas las colecciones con todas las cartas
  },

  data() {
    return {
      nombreColeccion: "",
      nombreAlbum: "",
      imagenAlbum: "",
      precioAlbum: "",
      nombreCromo: "",
      imagenCromo: "",
      precioCromo: "",
      existenciasCromo: "",
      nuevaColeccion: {},
      ///////////////
      todasColecciones: null,
    };
  },

  methods: {
    actualizarExistencia: function(col){
       var xhttp = new XMLHttpRequest();
      var url ="http://localhost:5000/baseDatos/Administracion/sumaExistencias";
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        }
      };

      xhttp.open("POST", url, false);
      xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
      xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

      xhttp.send(JSON.stringify(col)); //enviamos la coleccion con la existencia actualizada


    },
    nuevoCromo: function () {
      //añadimos el cromo metido por la interfaz al array de cromos
      cromos.push({
        nombre: this.nombreCromo,
        imagen: this.imagenCromo,
        precio: this.precioCromo,
        quedan: this.existenciasCromo,
      });

      cromosAniadidos++;
      document.getElementById("numeroCromos").innerHTML = cromosAniadidos;

      //limpio campos
    },

    guardarColeccion: function () {
      this.nuevaColeccion = {
        nombre: this.nombreColeccion,
        album: {
          nombre: this.nombreAlbum,
          imagen: this.imagenAlbum,
          precio: this.precioAlbum,
        },
        cartas: cromos,
      };

      cromosAniadidos = 0;
      document.getElementById("numeroCromos").innerHTML = cromosAniadidos;

      this.enviarColeccionBaseDatos(this.nuevaColeccion);
    },

    enviarColeccionBaseDatos: function (coleccion) {
      //peticion post
      var xhttp = new XMLHttpRequest();
      var url = "http://localhost:5000/baseDatos/Administracion/Anyadir";

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
        }
      };

      xhttp.open("POST", url, false);
      xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
      xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

      xhttp.send(JSON.stringify(coleccion));
    },

    traerColecciones: function () {
      var request = new XMLHttpRequest();
      request.open("GET", "http://localhost:5000/baseDatos/Colecciones", false); // `false` makes the request synchronous
      request.send(null);

      if (request.status === 200) {
        this.todasColecciones = JSON.parse(request.responseText);
        console.log("colecciones", this.todasColecciones);
      }/*else if(request.status === 304){
          request.send(null);
      }*/
    },
  },
};
</script>
