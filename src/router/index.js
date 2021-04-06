import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Random from '../views/Random.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import RecipesIndex from '../views/RecipesIndex.vue'
import RecipesNew from '../views/RecipesNew.vue'
import RecipesShow from '../views/RecipesShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipes',
    name: 'RecipesIndex',
    component: RecipesIndex
  },
  {
    path: '/recipes/new',
    name: 'RecipesNew',
    component: RecipesNew
  },
  {
    path: '/recipes/:id',
    name: 'RecipesShow',
    component: RecipesShow
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  { 
    path: '/random', 
    name: 'Random', 
    component: Random 
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
