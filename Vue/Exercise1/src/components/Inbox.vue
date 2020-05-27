<template>
  <div class="mailList">
    <v-list two-line>
      <v-list-item-group v-model="selected" color="light-green accent-4">
        <MailItem
          v-for="message in inboxMessages"
          :message="message"
          :key="message.id"
        />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { inboxMessages } from "../data/mails.json";
import MailItem from "./MailItem.vue";

export default {
  name: "MailList",
  data() {
    return {
      inboxMessages,
      selected: undefined
    };
  },
  components: {
    MailItem
  }
};
</script>
