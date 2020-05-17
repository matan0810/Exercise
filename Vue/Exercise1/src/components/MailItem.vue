<template>
  <div class="mailItem">
    <v-card>
      <v-card-title>{{ sender }}</v-card-title>
      <v-card-subtitle>{{ title }}</v-card-subtitle>
      <v-card-text>{{ content }}</v-card-text>
      <v-icon>mdi-star-border</v-icon>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MailItem",
  props: {
    sender: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  components: {}
};
</script>
