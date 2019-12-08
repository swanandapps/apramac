import Vue from 'vue'
import Router from "vue-router";
const Store = () =>
    import ('./views/store.vue')
const Home = () =>
    import ('./views/Home.vue')
const Cart = () =>
    import ('./views/cart.vue')
const Contact = () =>
    import ('./views/contact.vue')
const Created = () =>
    import ('./views/created.vue')
const Curated = () =>
    import ('./views/curated.vue')
const Events = () =>
    import ('./views/events.vue')
const About = () =>
    import ('./views/about.vue')
const Admin = () =>
    import ('./views/admin.vue')
const Productdetails = () =>
    import ('./views/productDetails.vue')
const Checkout = () =>
    import ('./views/checkout.vue')
const Login = () =>
    import ('./views/login.vue')
const Services = () =>
    import ('./views/services.vue')
const Ordersuccess = () =>
    import ('./views/ordersuccess.vue')


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/store',
            name: 'store',
            component: Store
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },


        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/created",
            name: "created",
            component: Created
        },
        {
            path: "/curated",
            name: "curated",
            component: Curated
        },
        {
            path: "/events",
            name: "events",
            component: Events
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: "/admin",
            name: "admin",

            component: Admin


        },
        {
            path: "/productdetails/:id",
            name: "productdetails",
            component: Productdetails

        },
        {
            path: "/checkout",
            name: "checkout",
            component: Checkout

        },
        {
            path: "/login",
            name: "login",
            component: Login

        },
        {

            path: "/services",
            name: "services",
            component: Services
        },

        {

            path: '/ordersuccess',
            name: 'ordersuccess',
            component: Ordersuccess


        }




    ]
})