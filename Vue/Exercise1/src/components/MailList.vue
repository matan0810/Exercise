<template>
  <div>
    <v-list two-line>
      <v-list-item-group v-model="selected" color="light-green accent-4">
        <MailItem v-for="message in messages" :message="message" :key="message.id" />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import MailItem from "./MailItem.vue";

export default {
  name: "MailList",
  data() {
    return {
      selected: undefined
    };
  },
  components: {
    MailItem
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>
