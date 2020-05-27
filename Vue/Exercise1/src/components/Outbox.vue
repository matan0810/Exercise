<template>
  <div>
    <MailList :messages="outboxMessages" />
  </div>
</template>

<script>
import { bus } from "../main.js";
import { outboxMessages } from "../data/mails.json";
import MailList from "./MailList.vue";

export default {
  name: "Outbox",
  data() {
    return {
      outboxMessages
    };
  },
  components: {
    MailList
  },
  methods: {
    addMessage(message) {
      outboxMessages.push(message);
    }
  },
  created() {
    bus.$on("newMessage", this.addMessage);
  }
};
</script>