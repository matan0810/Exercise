import Vue from 'vue'
import VueRouter from 'vue-router'
import Inbox from './views/Inbox.vue'
import Outbox from './views/Outbox.vue'
import Spam from './views/Spam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'דואר נכנס',
    component: Inbox
  },
  {
    path: '/outbox',
    name: 'דואר יוצא',
    component: Outbox
  },
  {
    path: '/spam',
    name: 'דואר זבל',
    component: Spam
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
