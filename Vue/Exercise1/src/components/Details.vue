<template>
  <v-card class="fullHeight">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ currentTitle }}</v-card-title>
    <v-card-text
      v-bind:class="[extraDetails ? 'twoThirdsDetailsHeight' : 'fullDetailsHeight']"
      class="overflow-y-auto text--primary"
    >
      <MailList :messages="currentMessages" />
    </v-card-text>
  </v-card>
</template>

<script>
import MailList from "./MailList.vue";

export default {
  name: "Details",
  components: {
    MailList
  },
  computed: {
    currentMessages: function() {
      let messegesList = [];
      if (this.currentTitle === "דואר נכנס") {
        messegesList = this.inboxMessages;
      } else if (this.currentTitle === "דואר יוצא") {
        messegesList = this.outBoxMessages;
      } else if (this.currentTitle === "דואר זבל") {
        messegesList = this.spamMessages;
      }

      return messegesList;
    }
  },
  data() {
    return {
      inboxMessages: [
        {
          id: 1,
          title: "ארוחת בוצר הבוקר?",
          sent: new Date(1489873794000),
          from: "ישראל ישראלי",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
        },
        {
          id: 2,
          title: "whats up",
          sent: new Date(1589873794000),
          from: "mark zukerberg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
        },
        {
          id: 3,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 4,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 5,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 6,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 7,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 8,
          title: "888888888",
          sent: new Date(),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        }
      ],
      outBoxMessages: [
        {
          id: 12,
          title: "whats up",
          sent: new Date(1589873794000),
          from: "mark zukerberg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
        },
        {
          id: 13,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 14,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 15,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 16,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 17,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Yossi",
          content: "Better call Saul!"
        },
        {
          id: 18,
          title: "888888888",
          sent: new Date(),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        }
      ],
      spamMessages: [
        {
          id: 12,
          title: "whats up",
          sent: new Date(1589873794000),
          from: "mark zukerberg",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan elementum ligula a venenatis. Ut bibendum ipsum sapien, quis laoreet quam molestie a. Donec eget quam nec elit posuere dapibus. Sed eleifend justo justo, in faucibus libero tincidunt in. Vestibulum tristique eget sapien non porta. Quisque leo mi, posuere sed ex ac, ullamcorper dignissim erat. Ut tempus sem ut volutpat maximus. Donec lobortis, nibh nec dignissim bibendum, nibh ante malesuada ligula, elementum viverra odio erat ac tortor. In gravida vehicula augue eu cursus. Cras nec enim rhoncus turpis blandit blandit. Praesent varius nunc ligula, vel vehicula sem porttitor nec. Ut ac nunc sed ex fringilla ultrices ac eu nulla. Sed at placerat ex. Pellentesque fermentum diam risus, vitae molestie neque suscipit ac. Mauris pretium vestibulum egestas."
        },
        {
          id: 13,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 14,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 15,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 16,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 17,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Yossi",
          content: "Better call Saul!"
        },
        {
          id: 18,
          title: "888888888",
          sent: new Date(),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 19,
          title: "999",
          sent: new Date(),
          from: "Jll",
          content: "Betaul!"
        }
      ]
    };
  },
  props: {
    currentTitle: {
      type: String,
      required: true
    },
    extraDetails: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.fullHeight {
  height: 100%;
}

.fullDetailsHeight {
  max-height: 81vh;
  height: 100%;
}

.twoThirdsDetailsHeight {
  max-height: 50vh;
  height: 100%;
}
</style>