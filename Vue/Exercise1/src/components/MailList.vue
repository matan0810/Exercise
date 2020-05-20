<template>
  <div class="mailList">
    <v-list two-line>
      <v-list-item-group v-model="selected" active-class="orange--text">
        <MailItem v-for="message in messages" :message="message" :key="message.id" />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import MailItem from "./MailItem.vue";

export default {
  name: "MailList",
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  components: {
    MailItem
  }
};
</script>
