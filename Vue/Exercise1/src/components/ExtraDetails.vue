<template>
  <MailCard :title="'מידע נוסף'">
    <v-card-text class="overflow-y-auto extraDetailsHeight text--primary">
      <div v-if="extraDetails.shown">
        <h3 class="pt-3">נושא: {{ extraDetails.title }}</h3>
        <v-divider />
        <h5 class="pt-2">נשלח על ידי: {{ extraDetails.from }}</h5>
        <p>תוכן: {{ extraDetails.content }}</p>
      </div>
    </v-card-text>
  </MailCard>
</template>

<script>
import { mapState } from "vuex";
import MailCard from "./MailCard.vue";

export default {
  name: "ExtraDetails",
  components: {
    MailCard
  },
  computed: {
    ...mapState(["extraDetails"])
  }
};
</script>

<style scoped>
.extraDetailsHeight {
  max-height: 18vh;
}
</style>