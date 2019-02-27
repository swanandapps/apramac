import Vue from 'vue'

import Router from "vue-router";
import home from './views/home.vue'
import cart from './views/cart.vue'
import admin from './views/admin.vue'
import productdetails from './views/productDetails'
import checkout from './views/checkout'
import services from './views/services'
import store from './views/store.vue'
import Design from './views/Design.vue'
import details from './views/details.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/store',
            name: 'store',
            component: store
        },
        {
            path: '/design',
            name: 'design',
            component: Design
        },
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: "/cart",
            name: "cart",
            component: cart
        },
        {
            path: "/admin",
            name: "admin",
            component: admin

        },
        {
            path: "/productdetails",
            name: "productdetails",
            component: productdetails

        },
        {
            path: "/checkout",
            name: "checkout",
            component: checkout

        },
        {

            path: "/services",
            name: "services",
            component: services
        },
        {

            path: "/details",
            name: "details",
            component: details
        }




    ]
})