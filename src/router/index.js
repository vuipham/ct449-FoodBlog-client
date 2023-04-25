import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/view-admin/HomeView.vue'
import HomeViewClient from '../views/views_client/HomeView_client.vue'
import AddPost from '../views/view-admin/AddPost.vue'
import Post from '../views/view-admin/Post.vue'
import PostClient from '../views/views_client/Post_client.vue'
import EditPost from '../views/view-admin/EditPost.vue'
import Login from '../views/view-admin/Login.vue'
import Register from '../views/view-admin/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home_client',
    name: 'home_client',
    component: HomeViewClient
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post_client/:id',
    name: 'post_client',
    component: PostClient
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/view-admin/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
