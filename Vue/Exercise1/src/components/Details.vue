<template>
  <v-card style="height: 100%">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ currentTitle }}</v-card-title>
    <v-card-text class="text--primary mt-1">
      <Inbox v-if="currentTitle==='דואר נכנס'" />
      <Outbox v-else-if="currentTitle==='דואר יוצא'" />
      <Spam v-else-if="currentTitle==='דואר זבל'" />
    </v-card-text>
  </v-card>
</template>

<script>
import Inbox from "../views/Inbox.vue";
import Outbox from "../views/Outbox.vue";
import Spam from "../views/Spam.vue";

export default {
  name: "Details",
  props: {
    currentTitle: {
      type: String,
      required: true
    }
  },
  components: {
    Inbox,
    Outbox,
    Spam
  }
};
</script>
