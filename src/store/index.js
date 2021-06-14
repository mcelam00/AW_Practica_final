import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logueado: false,
    currentColeccion: null,
    currentUser: null,
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
    setCurrentUser(state, data) {
      state.currentUser = data;
      console.log("Current usuario", state.currentUser);
    },
    /* updateCollection(state, coleccionActualizada){
      state.currentColeccion = coleccionActualizada;
    }*/
  },
  actions: {
    //llamamos con el dispatch
    changeStateLogueadoAction(context) {
      context.commit("changeStateLogueado");
    },
    setCurrentColeccionAction(context, data) {
      context.commit("setCurrentColeccion", data); //a mutations
    },
    setCurrentUserAction(context, data) {
      context.commit("setCurrentUser", data);
    },
    /*updateCollectionAction(context, coleccionActualizada){

      context.commit("updateCollection", coleccionActualizada);
    },
*/
  },
  getters: {
    logueado(state) {
      return state.logueado;
    },
    currentColeccion(state) {
      return state.currentColeccion;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },
  modules: {},
});
