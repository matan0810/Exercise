<template>
  <div>
    <MailList :messages="messages.spamMessages" />
  </div>
</template>

<script>
import MailList from "../components/MailList.vue";
import { mapState } from "vuex";

export default {
  name: "Spam",
  computed: {
    ...mapState(["messages"])
  },
  components: {
    MailList
  }
};
</script>
