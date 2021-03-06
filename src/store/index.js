import Vue from 'vue'
import Vuex from 'vuex'
import productService from '../services/ProductService2'

Vue.use(Vuex)

export default new Vuex.Store({
    state    : {
        products: [],
        errors  : [],
        cart    : []
    },
    mutations: {
        //Ici je change l'habituel payload par products
        GET_PRODUCTS(state, products) {
            state.products = products
        },
        CREATE_PRODUCT(state, product) {
            state.products = [
                product,
                ...state.products]
        },
        GET_PRODUCT_ERROR({errors}, error) {
            // Car import nomée de errors sinon il aurai fallu écrire :
            //        state.errors = [error, ...state.errors]
            errors = [error, ...errors]
        },
        UPDATE_CART(state, cart) {
            state.cart = cart
        },
        REMOVE_ONE_FROM_CART(state, cart) {
            state.cart = cart
        }
    },
    actions  : {
        //Import nommée, sans {} il faut appeler context.commit
        getProducts({commit}) {
            productService.getProducts()
            .then(res => {
                commit(
                    'GET_PRODUCTS',
                    res.data)
            })
            .catch(err => {
                const error = {
                    date   : new Date(),
                    message: `failed to retrieve products: ${err.message}`
                }
                commit(
                    'CREATE_ERROR',
                    error)
            })
        },
        createProduct({commit}, product) {
            productService
            .createProduct(product)
            .then(() => {
                commit(
                    'GET_PRODUCT_ERROR', product)
            })
        },
        updateCart({commit}, product) {
            productService
            .addToCart(product)
            .then(() => {
                commit('UPDATE_CART',
                    JSON.parse(localStorage.getItem('vuex-commerce-cart')))
            }).catch(err =>
                console.error(err))
        },
        removeOneFromCart({commit}, product) {
            return productService
            .removeOneFromCart(product)
            .then(() => {
                commit('REMOVE_ONE_FROM_CART',
                    JSON.parse(localStorage
                        .getItem('vuex-commerce-cart')
                    ))
            })
            .catch(err =>
                console.error(err))
        }
    },
    getters  : {
        getCart(state) {
            return state.cart
        },
        getNumberArticlesinCart(state) {
            if (!state.cart.products) return 0
            //Calcule le total d'article dans le caddie grâce à reduce
            const numberArticles = state.cart.products.reduce(
                (acc, current) => {
                    return acc + current.quantity
                }, 0)
            return numberArticles
        }
    },
    modules  : {}
})
