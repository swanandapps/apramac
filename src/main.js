import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueApexCharts from 'vue-apexcharts'
//import { MdMenu, MdButton, MdIcon } from 'vue-material/dist/components';
//import 'vue-material/dist/vue-material.min.css';

//Vue.use(MdMenu)
//Vue.use(MdButton)
//Vue.use(MdIcon)
//import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);

import {
    Submenu,
    MenuItem,
    TableColumn,
    RadioGroup,
    Button,
    Form,
    Table,
    Row,
    Radio,
    Col,
    Menu,
    CarouselItem,
    Carousel,
    Tooltip,
    Input,
    FormItem
} from 'element-ui'

import VueHZoom from 'vue-h-zoom';
import VueSweetalert2 from 'vue-sweetalert2';
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/filter'
import 'vue-awesome/icons/sort'
import 'vue-awesome/icons/minus'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/trash'

import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);



//Vue.component('apexchart', VueApexCharts)
import VueScrollReveal from 'vue-scroll-reveal';
//import './plugins/element.js'

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

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Table)
Vue.use(Menu)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(TableColumn)
    //Vue.use(Notification)
    //Vue.use(Message)
    //Vue.use(MessageBox)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')