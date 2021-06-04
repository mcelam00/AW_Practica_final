import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Principal from '../views/Principal.vue'
import MiPerfil from '../views/MiPerfil.vue'
import ConseguirPuntos from '../views/ConseguirPuntos.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Principal',

        component: () =>
            import ('../views/Principal.vue')
    },
    {
        path: '/MiPerfil',
        name: 'MiPerfil',

        component: () =>
            import ('../views/MiPerfil.vue')
    },
    {
        path: '/ConseguirPuntos',
        name: 'ConseguirPuntos',

        component: () =>
            import ('../views/ConseguirPuntos.vue')
    },
    {
        path: '/Login',
        name: 'Login',

        component: () =>
            import ('../views/Login.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router