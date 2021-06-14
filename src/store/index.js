import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logueado: false,
    currentColeccion: null,
  },
  mutations: {
    changeStateLogueado(state) {
      state.logueado = !state.logueado;
      console.log("Estado logueado", state.logueado);
    },
    setCurrentColeccion(state, data) {
      state.currentColeccion = data;
      console.log("current coleccion", state.currentColeccion);
    },
  },
  actions: {
    changeStateLogueadoAction(context) {

      context.commit("changeStateLogueado");
    },
    setCurrentColeccionAction(context, data) {
      
      context.commit("setCurrentColeccion", data);
    },
  },
  getters: {
    logueado(state) {
      return state.logueado;
    },
    currentColeccion(state) {
      return state.currentColeccion;
    },
  },
  modules: {},
});
