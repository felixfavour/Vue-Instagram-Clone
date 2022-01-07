import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Explore from '../views/Explore.vue'
import Messages from '../views/Messages.vue'
import Post from '../views/Post.vue'
import Profile from '../views/Profile.vue'
import ProfilePostGrids from '../components/ProfilePostGrids.vue'
import ProfileSaved from '../components/ProfileSaved.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/profile/saved',
    name: 'profile-saved',
    components: {
      default: Profile,
      saved: ProfileSaved
    }
  },
  {
    path: '/profile/tagged',
    name: 'profile-tagged',
    components: {
      default: Profile,
      tagged: ProfilePostGrids
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
