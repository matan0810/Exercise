<template>
  <div>
    <MailList :messages="spamMessages" />
  </div>
</template>

<script>
import { spamMessages } from "../data/mails.json";
import MailList from "../components/MailList.vue";

export default {
  name: "Spam",
  data() {
    return {
      spamMessages
    };
  },
  components: {
    MailList
  }
};
</script>
