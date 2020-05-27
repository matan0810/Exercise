<template>
  <div>
    <MailList :messages="outboxMessages" />
  </div>
</template>

<script>
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
  }
};
</script>