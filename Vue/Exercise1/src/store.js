import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPageTitle: "דואר נכנס"
  },
  mutations: {
    changePageTitle(state, title) {
      state.currentPageTitle = title;
    }
  },
  actions: {
    changePageTitle(context, title) {
      context.commit('changePageTitle', title);
    }
  }
})
