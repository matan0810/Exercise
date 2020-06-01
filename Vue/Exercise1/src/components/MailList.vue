<template>
  <div>
    <v-list two-line>
      <v-list-item-group color="light-green accent-4">
        <MailItem v-for="message in currentArrangedMessages" :message="message" :key="message.id" />
      </v-list-item-group>
      <p class="pt-6 text-center font-italic title" v-if="!currentArrangedMessages.length">לא נמצאו הודעות</p>
    </v-list>
  </div>
</template>

<script>
import MailItem from "./MailItem.vue";
import { mapState } from "vuex";

export default {
  name: "MailList",
  components: {
    MailItem
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(["showOnlyFavorites"]),
    currentArrangedMessages() {
      let arrangedMessages = this.messages;

      if (this.showOnlyFavorites == true) {
        arrangedMessages = this.messages.filter(
          message => message.favorite == true
        );
      }

      return arrangedMessages;
    }
  }
};
</script>
