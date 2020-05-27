<template>
  <v-card class="fullHeight">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ currentTitle }}</v-card-title>
    <component :is="currentComponent" :messages="currentMessages" />
  </v-card>
</template>

<script>
export default {
  name: "MailCard",
  props: {
    currentTitle: {
      type: String,
      required: true
    },
    currentComponent: {
      type: Boolean,
      required: true
    }
  }
};
</script>