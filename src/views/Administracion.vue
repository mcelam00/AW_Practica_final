<template>
  <v-container>
    <v-card class="mx-auto" max-width="1000">
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-counter</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-card-title>
              ADMINISTRACIÓN DEL KIOSKO
            </v-card-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mx-auto" max-width="1000">
      <v-card-title>
        NUEVA COLECCIÓN
      </v-card-title>

      <v-card-subtitle>
        Responde a las preguntas y gana puntos, por cada acierto se sumará un
        punto
      </v-card-subtitle>

      <v-divider></v-divider>

      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="
          picoBoton = !picoBoton;
          ponerACero();
          traerPregunta();
        "
        v-if="!picoBoton"
      >
        ¡Comencemos!
      </v-btn>

      <v-card-subtitle
        class="title font-weight-light"
        v-if="picoBoton"
        id="pregunta"
      >
      </v-card-subtitle>

      <v-btn
        right
        absolute
        class="ma-2"
        outlined
        color="indigo"
        v-if="picoBoton"
        @click="comprobarSolucion()"
      >
        Enviar
      </v-btn>

      <v-text-field
        style="width:400px"
        class="mx-4"
        v-model="contestacion"
        solo
        label="Respuesta"
        clearable
        v-if="picoBoton"
      ></v-text-field>

      <v-alert type="success" id="solucion" v-show="visible"></v-alert>
      <v-alert id="error" type="error" v-show="visible"></v-alert>
    </v-card>
  </v-container>
</template>
