<template>
  <div class="inbox">
    <MailList :messages="inboxMessages" />
  </div>
</template>

<script>
import { inboxMessages } from "../data/mails.json";
import MailList from "./MailList.vue";

export default {
  name: "Inbox",
  data() {
    return {
      inboxMessages
    };
  },
  components: {
    MailList
  }
};
</script>
