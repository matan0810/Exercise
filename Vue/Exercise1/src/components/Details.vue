<template>
  <v-card style="height: 100%">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ currentTitle }}</v-card-title>
    <v-card-text class="text--primary">
        <v-list two-line>
          <v-list-item-group v-model="selected" active-class="grey--text">
            <template v-for="(item, index) in inboxMessages">
              <v-list-item :key="item.title">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.from }}</v-list-item-title>
                    <v-list-item-subtitle class="text--primary">{{ item.title }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text>{{ item.sent }}</v-list-item-action-text>
                    <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>
                    <v-icon v-else color="yellow">mdi-star</v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider v-if="index + 1 < inboxMessages.length" :key="index"></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      <!-- <Inbox :Messages="inboxMessages" v-if="currentTitle==='דואר נכנס'" />
      <Outbox v-else-if="currentTitle==='דואר יוצא'" />
      <Spam v-else-if="currentTitle==='דואר זבל'" />-->
    </v-card-text>
  </v-card>
</template>

<script>
// import Inbox from "./Inbox.vue";
// import Outbox from "./Outbox.vue";
// import Spam from "./Spam.vue";

export default {
  name: "Details",
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
          id: 3,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 3,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        },
        {
          id: 3,
          title: "bla bla lba",
          sent: new Date(1589873694000),
          from: "Jimmy McGill",
          content: "Better call Saul!"
        }
      ]
    };
  },
  props: {
    currentTitle: {
      type: String,
      required: true
    }
  },
  components: {
    // Inbox,
    // Outbox,
    // Spam
  }
};
</script>
