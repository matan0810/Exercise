import Vue from "vue"
import Vuex from "vuex"
import { currentMessagesId, messages } from "./data/mails.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showOnlyFavorites: false,
    extraDetails: {
      shown: false,
      title: "",
      from: "",
      content: ""
    },
    currentMessagesId: currentMessagesId,
    messages: messages
  },
  mutations: {
    favoriteClick(state) {
      state.showOnlyFavorites = !state.showOnlyFavorites;
    },
    updateExtraDetails(state, message) {
      state.extraDetails =
      {
        shown: true,
        title: message.title,
        from: message.from,
        content: message.content
      }
    },
    hideExtraDetails(state) {
      state.extraDetails.shown = false;
    },
    addOutboxMessage(state, message) {
      state.messages.outboxMessages.unshift(message);
      state.currentMessagesId += 1;
    },
    addInboxMessage(state, message) {
      state.messages.inboxMessages.unshift(message);
      state.currentMessagesId += 1;
    },
    toggleMessageFavoriteById(state, id) {
      Object.values(state.messages).forEach(specificMessages => {
        let message = specificMessages.find(message => message.id === id);

        if (message) {
          message.favorite = !message.favorite;
        }
      });
    },
    deleteMessageById(state, id) {
      const deletedMessage = state.messages.inboxMessages.filter(message => message.id === id)[0];

      state.messages.inboxMessages = state.messages.inboxMessages.filter(message => message.id != id);

      state.messages.spamMessages.unshift(deletedMessage);
    },
    restoreMessageById(state, id) {
      const restoredMessage = state.messages.spamMessages.filter(message => message.id === id)[0];

      state.messages.spamMessages = state.messages.spamMessages.filter(message => message.id != id);

      state.messages.inboxMessages.unshift(restoredMessage);
    },
    replyMessageById(state, id) {
      const replyedMessage = state.messages.inboxMessages.filter(message => message.id === id)[0];

      state.messages.inboxMessages = state.messages.inboxMessages.filter(message => message.id != id);

      state.messages.outboxMessages.unshift(replyedMessage);
    }
  },
  actions: {
    favoriteClick(context) {
      context.commit('favoriteClick');
    },
    updateExtraDetails(context, message) {
      context.commit('updateExtraDetails', message);
    },
    hideExtraDetails(context, message) {
      context.commit('hideExtraDetails', message);
    },
    addOutboxMessage(context, message) {
      context.commit('addOutboxMessage', message);
    },
    addInboxMessage(context, message) {
      context.commit('addInboxMessage', message);
    },
    toggleMessageFavoriteById(context, id) {
      context.commit('toggleMessageFavoriteById', id);
    },
    deleteMessageById(context, id) {
      context.commit('deleteMessageById', id);
    },
    restoreMessageById(context, id) {
      context.commit('restoreMessageById', id);
    },
    replyMessageById(context, id) {
      context.commit('replyMessageById', id);
    },
  }
})
