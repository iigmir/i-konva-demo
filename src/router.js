import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Akamaru from "./views/Akamaru.vue"
import ToTable from "./views/ToTable.vue"
import Bkgimg from "./views/Bkgimg.vue"
import GHouse from "./views/GreatestHouse.vue"

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
        path: "/proto2",
        name: "proto2",
        component: ToTable
    }, {
        path: "/proto3",
        name: "proto3",
        component: Bkgimg
    }, {
        path: "/ghouse",
        name: "ghouse",
        component: GHouse
    }]
})
