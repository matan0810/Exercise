<template>
  <div>
    <MailList :messages="spamMessages" />
  </div>
</template>

<script>
import MailList from "../components/MailList.vue";
import { mapState } from "vuex";

export default {
  name: "Spam",
  computed: {
    ...mapState(["spamMessages"])
  },
  components: {
    MailList
  }
};
</script>
