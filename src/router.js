import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SSS from "./views/SSS.vue";
import GHouse from "./views/GreatestHouse.vue";
import VKA from "./views/vka.vue";
import Proto1 from "./views/prototype/Proto1.vue";
import Enies from "./views/Enies.vue";

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, {
        path: "/vuekonva",
        name: "vuekonva",
        component: VKA
    }, {
        path: "/ghouse",
        name: "ghouse",
        component: GHouse
    }, {
        path: "/simon",
        name: "simon",
        component: SSS
    }, {
        path: "/proto1",
        name: "proto1",
        component: Proto1
    }, {
        path: "/enies",
        name: "enies",
        component: Enies
    }]
})
