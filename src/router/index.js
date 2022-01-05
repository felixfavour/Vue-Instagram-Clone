import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Explore from '../views/Explore.vue'
import Messages from '../views/Messages.vue'
import Post from '../views/Post.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
