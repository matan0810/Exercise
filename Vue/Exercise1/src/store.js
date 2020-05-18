import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: { id: 0, title: "דואר נכנס", icon: "mdi-email", route: "/" }
  },
  mutations: {
    changePage(state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    changePage(context, page) {
      context.commit('changePage', page);
    }
  }
})
