<template>
  <v-card style="height: 100%">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ currentTitle }}</v-card-title>
    <v-card-text class="text--primary mt-1"></v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Details",
  props: {
    currentTitle: {
      type: String,
      required: true
    }
  }
};
</script>
