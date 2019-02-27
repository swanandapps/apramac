import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        title: "Welcome to Vue STORE",
        cartproducts: [],
        clickedproduct: [],
        orders: [],
        disdate: '',
        quantity: "0",
        code2: "20"




    },
    getters: {
        cartproducts: state => state.cartproducts,

    },

    mutations: {

        ADD_DATE: function(state, dispatchdate) {

            state.disdate = dispatchdate
        }

    },
    actions: {


    }


})