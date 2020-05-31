import Vue from 'vue'
import VueRouter from 'vue-router'
import Inbox from './views/Inbox.vue'
import NewMessage from './views/NewMessage.vue'
import Outbox from './views/Outbox.vue'
import Spam from './views/Spam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/newMessage',
    name: 'NewMessage',
    component: NewMessage
  },
  {
    path: '/outbox',
    name: 'Outbox',
    component: Outbox
  }, {
    path: '/spam',
    name: 'Spam',
    component: Spam
  }
]

const router = new VueRouter({
  routes
})

export default router
