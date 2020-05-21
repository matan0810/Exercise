<template>
  <div class="mailList">
    <v-list two-line>
      <v-list-item-group color="orange">
        <MailItem
          @itemClick="itemClick"
          v-for="message in messages"
          :message="message"
          :key="message.id"
        />
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
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  components: {
    MailItem
  },
  methods: {
    itemClick: function(message) {
      this.$emit("showDetails", message);
    }
  }
};
</script>
