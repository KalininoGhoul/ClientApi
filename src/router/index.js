import checkToken from '@/helpers/checkToken';
import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const LoginView = () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue');
const RegView = () => import(/* webpackChunkName: "reg" */ '../views/RegView.vue');
const UsersView = () => import(/* webpackChunkName: "login" */ '../views/UsersView.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'reg',
    component: RegView,
    beforeEnter: checkToken,
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
    beforeEnter: checkToken,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
