import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extraDetails: {
      shown: false,
      title: "",
      from: "",
      content: ""
    },
    currentMessagesId: 20,
    inboxMessages: [
      {
        id: 1,
        title: "ארוחת בוצר הבוקר?",
        sent: 1489873794000,
        from: "ישראל ישראלי",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
      },
      {
        id: 2,
        title: "whats up",
        sent: 1589873794000,
        from: "mark zukerberg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
      },
      {
        id: 3,
        title: "bla bla lba",
        sent: 1589873694000,
        from: "Jimmy McGill",
        content: "Better call Saul!"
      },
      {
        id: 8,
        title: "888888888",
        sent: 1590502220,
        from: "Jimmy McGill",
        content: "Better call Saul!"
      }
    ],
    outboxMessages: [
      {
        id: 12,
        title: "whats up",
        sent: 1589873794000,
        from: "mark zukerberg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
      },
      {
        id: 17,
        title: "bla bla lba",
        sent: 1589873694000,
        from: "Yossi",
        content: "Better call Saul!"
      },
      {
        id: 18,
        title: "888888888",
        sent: 1590502220,
        from: "Jimmy McGill",
        content: "Better call Saul!"
      }
    ],
    spamMessages: [
      {
        id: 12,
        title: "whats up",
        sent: 1589873794000,
        from: "mark zukerberg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
      },
      {
        id: 17,
        title: "bla bla lba",
        sent: 1589873694000,
        from: "Yossi",
        content: "Better call Saul!"
      },
      {
        id: 18,
        title: "888888888",
        sent: 1590502220,
        from: "Jimmy McGill",
        content: "Better call Saul!"
      },
      {
        id: 19,
        title: "999",
        sent: 1590502220,
        from: "Jll",
        content: "Betaul!"
      }
    ]

  },
  mutations: {
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
      state.outboxMessages.push(message);
      state.currentMessagesId += 1;
    }
  },
  actions: {
    updateExtraDetails(context, message) {
      context.commit('updateExtraDetails', message)
    },
    hideExtraDetails(context, message) {
      context.commit('hideExtraDetails', message)
    },
    addOutboxMessage(context, message) {
      context.commit('addOutboxMessage', message)
    }
  }
})
