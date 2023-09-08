import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Music from '@/views/Music.vue';
import Study from '@/views/Study.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/music', component: Music },
    { path: '/study', component: Study },
    { path: '/login', component: Login },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});


export default router;
