<template>
  <v-container>
    <v-row>
      <v-col v-for="(pregunta, i) in this.preguntas" :key="i" cols="3">
        <PreguntasJuego1 :titulo="pregunta[0]" :respuesta="pregunta[1]">
        </PreguntasJuego1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PreguntasJuego1 from "@/components/PreguntasJuego1";
export default {
  name: "ConseguirPuntosJuego1",

  components: {
    PreguntasJuego1,
  },

  data() {
    return {
      colorBoton: [],
      title: [],
      preguntas: [
        ["1 + 1", "2"],
        ["32 + 54", "86"],
        ["12 · 13", "156"],
        ["34/2", "17"],
        ["√144", "12"],
        ["√4", "2"],
        ["15 · 6", "90"],
        ["3!", "6"],
        ["2/2", "1"],
        ["12 · 32", "384"],
        ["10 · 2 / 4", "5"],
        ["sen(π/2)", "1"],
      ],
    };
  },

  methods: {},
};
</script>
