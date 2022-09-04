import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/MyHome.vue';
import Template from '../pages/Template/TemPlate.vue';
import Getapi from '../pages/GetApi/GetApi.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/template', component: Template },
    { path: '/getapi', component: Getapi },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
