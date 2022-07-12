import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component: () => import('@/pages/home/Index.vue')
    },
    {
        path: '/me',
        component: ()=> import('@/pages/me/Index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
