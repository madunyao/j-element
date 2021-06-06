import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import homeRouter from './home';

const routes = [
  { path: '/', redirect: 'home' },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about2',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  ...homeRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
