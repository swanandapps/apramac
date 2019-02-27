import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import webp from 'vue2-webp'

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueMaterial);

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'

import VueHZoom from 'vue-h-zoom';
import VueSweetalert2 from 'vue-sweetalert2';
import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import VueSticky from 'vue-sticky'
Vue.use(vuescroll);
Vue.use(VueSticky)
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(webp)
Vue.use(VueScrollReveal);
Vue.use(VueHZoom)
    // You can also pass in default options
Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 80000,
    scale: 1,
    distance: '4000px',
    mobile: true
});
var VueScrollTo = require('vue-scrollto');
Vue.use(VueSweetalert2);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 2000,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.use(ElementUI)
Vue.use(BootstrapVue);
Vue.use(axios)
Vue.config.productionTip = false


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
