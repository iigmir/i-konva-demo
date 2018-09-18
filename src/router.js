import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SSS from "./views/SSS.vue";
import Bkgimg from "./views/Bkgimg.vue";
import Akamaru from "./views/Akamaru.vue";
import Animate from "./views/Animate.vue";
import GHouse from "./views/GreatestHouse.vue";

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
        path: "/proto1",
        name: "proto1",
        component: Akamaru
    }, {
        path: "/proto3",
        name: "proto3",
        component: Bkgimg
    }, {
        path: "/ghouse",
        name: "ghouse",
        component: GHouse
    }, {
        path: "/proto4",
        name: "proto4",
        component: Animate
    }, {
        path: "/simon",
        name: "simon",
        component: SSS
    }]
})
