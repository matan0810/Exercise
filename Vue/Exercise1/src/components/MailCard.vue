<template>
  <v-card class="fullHeight">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ title }}</v-card-title>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "MailCard",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>