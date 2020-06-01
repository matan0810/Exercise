import Vue from 'vue'
import Vuex from 'vuex'

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
    currentMessagesId: 20,
    messages: {
      inboxMessages: {
        type: "Inbox",
        mails: [
          {
            id: 1,
            title: "ארוחת בוצר הבוקר?",
            sent: 1489873794000,
            from: "ישראל ישראלי",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas.",
            favorite: false,
          },
          {
            id: 2,
            title: "whats up",
            sent: 1589873794000,
            from: "mark zukerberg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas.",
            favorite: false,
          },
          {
            id: 3,
            title: "bla bla lba",
            sent: 1589873694000,
            from: "Jimmy McGill",
            content: "Better call Saul!",
            favorite: true,
          },
          {
            id: 8,
            title: "888888888",
            sent: 1590502220,
            from: "Jimmy McGill",
            content: "Better call Saul!",
            favorite: false,
          }
        ]
      },
      outboxMessages: {
        type: "Outbox",
        mails: [
          {
            id: 12,
            title: "whats up",
            sent: 1589873794000,
            from: "mark zukerberg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas.",
            favorite: false,
          },
          {
            id: 17,
            title: "bla bla lba",
            sent: 1589873694000,
            from: "Yossi",
            content: "Better call Saul!",
            favorite: false,
          },
          {
            id: 18,
            title: "888888888",
            sent: 1590502220,
            from: "Jimmy McGill",
            content: "Better call Saul!",
            favorite: false,
          }
        ]
      },
      spamMessages: {
        type: "Spam",
        mails: [
          {
            id: 15,
            title: "whats up",
            sent: 1589873794000,
            from: "mark zukerberg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas.",
            favorite: false,
          },
          {
            id: 16,
            title: "bla bla lba",
            sent: 1589873694000,
            from: "Yossi",
            content: "Better call Saul!",
            favorite: false,
          },
          {
            id: 14,
            title: "888888888",
            sent: 1590502220,
            from: "Jimmy McGill",
            content: "Better call Saul!",
            favorite: false,
          },
          {
            id: 19,
            title: "999",
            sent: 1590502220,
            from: "Jll",
            content: "Betaul!",
            favorite: false,
          }
        ]
      }
    }
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
      state.messages.outboxMessages.mails.push(message);
      state.currentMessagesId += 1;
    },
    flipMessageFavoriteById(state, id) {
      Object.values(state.messages).forEach(specificMessages => {
        let message = specificMessages.mails.find(message => message.id == id);

        if (message) {
          message.favorite = !message.favorite;
        }
      });
    },
    deleteMessageById(state, [id, messageType]) {
      for (let key in state.messages) {
        if (state.messages[key].type === messageType) {
          state.messages[key].mails = state.messages[key].mails.filter(message => message.id != id);
        }
      }
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
    flipMessageFavoriteById(context, id) {
      context.commit('flipMessageFavoriteById', id);
    },
    deleteMessageById(context, [id, messageType]) {
      context.commit('deleteMessageById', [id, messageType]);
    }
  }
})
