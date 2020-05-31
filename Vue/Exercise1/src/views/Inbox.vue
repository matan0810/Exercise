<template>
  <div>
    <MailList :messages="messages.inboxMessages" />
  </div>
</template>

<script>
import MailList from "../components/MailList.vue";
import { mapState } from "vuex";

export default {
  name: "Inbox",
  computed: {
    ...mapState(["messages"])
  },
  components: {
    MailList
  }
};
</script>
