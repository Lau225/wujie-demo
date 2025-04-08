import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/vue3',
        name: 'vue3',
        component: () => import('../components/vue3.vue')
    },
    {
        path: '/react',
        name: 'react',
        component: () => import('../components/react.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router