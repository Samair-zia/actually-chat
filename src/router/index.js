import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vision from '../views/Vision.vue'
import Team from '../views/Team.vue'
import Privacy from '../views/Privacy.vue'
import Cookie from '../views/Cookie.vue'
import Agreement from '../views/Agreement.vue'
import Login from '../views/Login.vue'
import Categories from '../views/Categories.vue'
import Discussion from '../views/Discussion.vue'
import DiscussionList from '../views/DiscussionList.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import vueConfig from '../../vue.config'

Vue.use(VueRouter);

const checkAuth = (to, from, next) => {
  if(!localStorage.getItem('UserToken')) {
    localStorage.removeItem('UserID');
    localStorage.removeItem('UserToken');
    next({ name: 'Login' });
  }
  else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vision',
    name: 'Vision',
    component: Vision
  },
  {
    path: '/our-team',
    name: 'Team',
    component: Team
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/cookie-policy',
    name: 'Cookie',
    component: Cookie
  },
  {
    path: '/members-agreements',
    name: 'Agreement',
    component: Agreement
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    beforeEnter: checkAuth,
  },
  {
    path: '/discussion/:id',
    name: 'Discussion',
    component: Discussion,
    beforeEnter: checkAuth,
  },
  {
    path: '/discussion-list/:id',
    name: 'DiscussionList',
    component: DiscussionList,
    beforeEnter: checkAuth,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

console.log(vueConfig.publicPath)

const router = new VueRouter({
  mode: 'history',
  base: vueConfig.publicPath,
  scrollBehavior: () => Object.assign({}, { x: 0, y: 0 }),
  routes
})

export default router
