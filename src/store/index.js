import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logueado: false,
  },
  mutations: {
    changeStateLogueado(state) {
      state.logueado = !state.logueado;
      console.log("aa", state.logueado);
    },
  },
  actions: {
    changeStateLogueadoAction(context) {
      console.log("asde");

      context.commit("changeStateLogueado");
    },
  },
  getters: {
    logueado(state) {
      return state.logueado;
    },
  },
  modules: {},
});
