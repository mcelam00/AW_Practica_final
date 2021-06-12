import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Principal from "../views/Principal.vue";
import MiPerfil from "../views/MiPerfil.vue";
import Login from "../views/Login.vue";
import ConseguirPuntos from "../views/ConseguirPuntos.vue";
import ComprarAlbumYCartas from "../views/ComprarAlbumYCartas.vue";
import Juego1 from "../views/Juego1.vue"
import Juego2 from "../views/Juego2.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Principal",

        component: () =>
            import ("../views/Principal.vue"),
    },
    {
        path: "/MiPerfil",
        name: "MiPerfil",

        component: () =>
            import ("../views/MiPerfil.vue"),
    },
    {
        path: "/ConseguirPuntos",
        name: "ConseguirPuntos",

        component: () =>
            import ("../views/ConseguirPuntos.vue"),
    },
    {
        path: "/Login",
        name: "Login",

        component: () =>
            import ("../views/Login.vue"),
    },
    {
        path: "/ComprarAlbumYCartas",
        name: "ComprarAlbumYCartas",

        component: () =>
            import ("../views/ComprarAlbumYCartas.vue"),
    },
    {
        path: "/Registro",
        name: "Registro",

        component: () =>
            import ("../views/Registro.vue"),
    },
    {
        path: "/Juego1",
        name: "Juego1",

        component: () =>
            import ("../views/Juego1.vue"),
    },
    {
        path: "/Juego2",
        name: "Juego2",

        component: () =>
            import ("../views/Juego2.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;