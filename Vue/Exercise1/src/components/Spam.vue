<template>
  <div class="mailList">
    <v-list two-line>
      <v-list-item-group v-model="selected" color="orange">
        <MailItem v-for="message in spamMessages" :message="message" :key="message.id" />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { spamMessages } from "../data/mails.json";
import MailItem from "./MailItem.vue";

export default {
  name: "MailList",
  data() {
    return {
      spamMessages,
      selected: undefined
    };
  },
  components: {
    MailItem
  }
};
</script>
