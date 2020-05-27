<template>
  <v-card class="fullHeight">
    <v-card-title class="teal accent-4 white--text headline pr-12">מידע נוסף</v-card-title>
    <v-card-text class="overflow-y-auto extraDetailsHeight text--primary">
      <div v-if="hasExtraDetails">
        <h3 class="pt-3">נושא: {{ extraDetails.title }}</h3>
        <v-divider />
        <h5 class="pt-2">נשלח על ידי: {{ extraDetails.from }}</h5>
        <p>תוכן: {{ extraDetails.content }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { bus } from "../main.js";

export default {
  name: "ExtraDetails",
  data() {
    return {
      hasExtraDetails: false,
      extraDetails: {
        title: "",
        from: "",
        content: ""
      }
    };
  },
  methods: {
    addDetails(message) {
      this.hasExtraDetails = true;

      this.extraDetails.title = message.title;
      this.extraDetails.from = message.from;
      this.extraDetails.content = message.content;
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