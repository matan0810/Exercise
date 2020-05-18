<template>
  <v-card style="height: 100%">
    <v-card-title class="teal accent-4 white--text headline pr-12">{{ currentPage.title }}</v-card-title>
    <v-card-text class="text--primary mt-1">
      <router-view style="height: 100%" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Details",
  computed: {
    ...mapState(["currentPage"])
  }
};
</script>
