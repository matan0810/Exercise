<template>
  <div>
    <MailList :messages="messages.outboxMessages" />
  </div>
</template>

<script>
import MailList from "../components/MailList.vue";
import { mapState } from "vuex";

export default {
  name: "Outbox",
  components: {
    MailList
  },
  computed: {
    ...mapState(["messages"])
  }
};
</script>