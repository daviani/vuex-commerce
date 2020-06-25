import Vue from 'vue';
import Vuex from 'vuex';
import productService from '../services/ProductService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        errors: [],
    },
    mutations: {
        //Ici je change l'habituel payload par products
        GET_PRODUCTS(state, products) {
            state.products = products;
        },
        CREATE_PRODUCT(state, product) {
            state.products = [product, ...state.products];
        },
        CREATE_ERROR({errors}, error) {
            // Car import nomée de errors sinon il aurai fallu écrire :
            //        state.errors = [error, ...state.errors]
            errors = [error, ...errors];
        },
    },
    actions: {
        //Import nommée, sans {} il faut appeler context.commit
        getProducts({commit}) {
            productService.getProducts().then(res => {
                commit('GET_PRODUCTS', res.data);
            }).catch(err => {
                const error = {
                    date: new Date(),
                    message: `failed to retrieve products: ${err.message}`,
                };
                commit('CREATE_ERROR', error);
            });
        },
        createProduct({commit}, product) {
            productService.createProduct(product).then(() => {
                commit('CREATE_PRODUCT', product);
            });
        },
    },
    modules: {},
});
