import Vue from 'vue';
import Vuex from 'vuex';
import productService from '../services/ProductService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        //Ici je change l'habituel payload par products
        GET_PRODUCTS(state, products) {
            state.products = products
        }
    },
    actions: {
        //Import nommée, sans {} il faut appeler context.commit
        getProducts({ commit }) {
            productService
            .getProducts()
            .then(res => {
                commit("GET_PRODUCTS", res.data);
            })
            .catch(err => console.error(err.message));
        },
        createProduct({commit}, product) {
            productService
                .createProduct(product)
                .then(() => {
                commit("CREATE_PRODUCTS", product);
            })
        },
    },
    modules: {},
});
