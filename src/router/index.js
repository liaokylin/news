import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component: () => import('@/pages/home/index.vue')
    },
    {
        path: '/me',
        component: ()=> import('@/pages/me/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
