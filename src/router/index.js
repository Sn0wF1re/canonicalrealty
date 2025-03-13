import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/services', component: () => import('../views/ServicesView.vue') },
  { path: '/properties/:slug', component: () => import('../views/PropertyDetails.vue') },
//   { path: '/contact', component: () => import('../views/ContactView.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
