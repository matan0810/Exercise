<template>
  <div>
    <MailList :messages="inboxMessages" />
  </div>
</template>

<script>
import { inboxMessages } from "../data/mails.json";
import MailList from "../components/MailList.vue";

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
