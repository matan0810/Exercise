<template>
  <v-card>
    <v-card-title class="teal accent-4 white--text headline pr-12">מידע נוסף</v-card-title>
    <v-card-text class="overflow-y-auto extraDetailsHeight text--primary">
      <h3 class="pt-3">נושא: {{ extraDetailsTitle }}</h3>
      <h5 class="pt-2">נשלח על ידי: {{ extraDetailsFrom }}</h5>
      <p>תוכן: {{ extraDetailsContent }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { bus } from "../main.js";

export default {
  name: "ExtraDetails",
  data() {
    return {
      extraDetailsTitle: "",
      extraDetailsFrom: "",
      extraDetailsContent: ""
    };
  },
  methods: {
    addDetails(message) {
      this.extraDetailsTitle = message.title;
      this.extraDetailsFrom = message.from;
      this.extraDetailsContent = message.content;
    }
  },
  created() {
    bus.$on("showDetails", this.addDetails);
  }
};
</script>

<style scoped>
.extraDetailsHeight {
  max-height: 18vh;
}
</style>