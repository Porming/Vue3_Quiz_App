import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../views/Homepage.vue'
import Quiz from '../views/Quiz.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizes',
            component: Homepage
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: Quiz
        },

    ]

})

export default router