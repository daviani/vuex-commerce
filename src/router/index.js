import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home
    },
    {
        path     : '/contact',
        name     : 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path     : '/admin',
        name     : 'Admin',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Products.vue')
    },
    {
        path     : '/admin/product-add',
        name     : 'product-add',
        component: () => import(/* webpackChunkName: "about" */ '../views/Admin/ProductsAdd.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
