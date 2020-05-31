<template>
  <div>
    <MailList :messages="outboxMessages" />
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
    ...mapState(["outboxMessages"])
  }
};
</script>