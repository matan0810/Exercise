import Vue from "vue"
import VueRouter from "vue-router"
import Inbox from "./views/Inbox.vue"
import NewMessage from "./views/NewMessage.vue"
import Outbox from "./views/Outbox.vue"
import Spam from "./views/Spam.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: { name: "Inbox" }
  },
  {
    path: "/newMessage",
    name: "NewMessage",
    component: NewMessage,
    meta: {
      id: 0,
      title: "הודעה חדשה",
      icon: "mdi-email-outline",
    }
  },
  {
    path: "/inbox",
    name: "Inbox",
    component: Inbox,
    meta: {
      id: 1,
      title: "דואר נכנס",
      icon: "mdi-email"
    }
  },

  {
    path: "/outbox",
    name: "Outbox",
    component: Outbox,
    meta: {
      id: 2,
      title: "דואר יוצא",
      icon: "mdi-send",
    }
  }, {
    path: "/spam",
    name: "Spam",
    component: Spam,
    meta: {
      id: 3,
      title: "דואר זבל",
      icon: "mdi-delete",
    }
  }
]

const sideMenuRouteRange = { start: 1, end: routes.length };

const router = new VueRouter({
  routes,
  sideMenuRouteRange
})

export default router
