<template>
  <v-container>
    <v-col v-for="(pregunta, i) in this.preguntas" :key="i">
      <PreguntasJuego1 :titulo="pregunta[0]" :respuesta="pregunta[1]">
      </PreguntasJuego1>
    </v-col>

    <v-footer>
      <v-card-text class=".font-italic font-weight-bold text-center">
        &copy;2021 — <strong>KIOSKO POKIMONS</strong>
      </v-card-text>
    </v-footer>
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
      ],
      respuestas: ["2", "86", "156", "17", "12"],
    };
  },

  methods: {
    
  },
};
</script>
