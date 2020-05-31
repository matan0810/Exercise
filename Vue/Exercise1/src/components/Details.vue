<template>
  <div class="fullHeight">
    <v-row :class="[showExtraDetails ? 'twoThirdsHeight' : 'fullHeight']">
      <v-col>
        <MailCard :title="$route.meta.title" :showFavorite="showFavoriteOption">
          <v-card-text
            :class="[showExtraDetails ? 'twoThirdsDetailsHeight' : 'fullDetailsHeight']"
            class="overflow-y-auto text--primary"
          >
            <router-view />
          </v-card-text>
        </MailCard>
      </v-col>
    </v-row>
    <v-row class="thirdHeight" v-if="showExtraDetails">
      <v-col>
        <ExtraDetails />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ExtraDetails from "./ExtraDetails";
import MailCard from "./MailCard.vue";

export default {
  name: "Details",
  components: {
    ExtraDetails,
    MailCard
  },
  computed: {
    showExtraDetails() {
      return (
        this.$route.meta.title === "דואר נכנס" ||
        this.$route.meta.title === "דואר יוצא"
      );
    },
    showFavoriteOption() {
      return (
        this.$route.meta.title === "דואר נכנס" ||
        this.$route.meta.title === "דואר יוצא" ||
        this.$route.meta.title === "דואר זבל"
      );
    }
  }
};
</script>

<style scoped>
.twoThirdsHeight {
  height: 66%;
}

.thirdHeight {
  height: 34%;
}

.fullDetailsHeight {
  max-height: 81vh;
  height: 100%;
}

.twoThirdsDetailsHeight {
  max-height: 50vh;
  height: 100%;
}
</style>