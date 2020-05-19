<template>
  <div class="inbox">
    <v-card-text class="text--primary">
      <MailItem />
    </v-card-text>
  </div>
</template>

<script>
import MailItem from "./MailItem.vue";

export default {
  name: "Inbox",
  components: {
    MailItem
  }
};
</script>
