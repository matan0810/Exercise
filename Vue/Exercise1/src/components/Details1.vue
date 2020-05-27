<template>
  <v-card class="fullHeight">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ currentTitle }}</v-card-title>
    <v-card-text
      :class="[extraDetails ? 'twoThirdsDetailsHeight' : 'fullDetailsHeight']"
      class="overflow-y-auto text--primary"
    >
      <component :is="currentBox" />
    </v-card-text>
  </v-card>
</template>

<script>
import Inbox from "./Inbox.vue";
import Outbox from "./Outbox.vue";
import Spam from "./Spam.vue";

export default {
  name: "Details",
  components: {
    Inbox,
    Outbox,
    Spam
  },
  computed: {
    currentBox() {
      let currComponent = [];
      if (this.currentTitle === "דואר נכנס") {
        currComponent = Inbox;
      } else if (this.currentTitle === "דואר יוצא") {
        currComponent = Outbox;
      } else if (this.currentTitle === "דואר זבל") {
        currComponent = Spam;
      }

      return currComponent;
    },
    currentMessages() {
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
.fullDetailsHeight {
  max-height: 81vh;
  height: 100%;
}

.twoThirdsDetailsHeight {
  max-height: 50vh;
  height: 100%;
}
</style>