<template>
  <div class="inbox">
    <v-card-text class="text--primary">
      <v-list>
          <v-list-item-group v-model="currentMail" color="primary">
          <v-list-item v-for="(mail, i) in Messages" :key="i" link>
            <v-list-item-content>
              <MailItem :message="mail" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </div>
</template>

<script>
import MailItem from "./MailItem.vue";

export default {
  name: "Inbox",
  components: {
    MailItem
  },
  data() {
    return {
      currentMail: 0
    };
  },
  props: {
    Messages: {
      type: Array,
      required: true
    }
  }
};
</script>
