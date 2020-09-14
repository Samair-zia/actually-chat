import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vision from '../views/Vision.vue'
import Team from '../views/Team.vue'
import Privacy from '../views/Privacy.vue'
import Login from '../views/Login.vue'
import Categories from '../views/Categories.vue'
import Discussion from '../views/Discussion.vue'
import DiscussionList from '../views/DiscussionList.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import vueConfig from '../../vue.config'

Vue.use(VueRouter)

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
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/discussion',
    name: 'Discussion',
    component: Discussion
  },
  {
    path: '/discussion-list',
    name: 'DiscussionList',
    component: DiscussionList
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
