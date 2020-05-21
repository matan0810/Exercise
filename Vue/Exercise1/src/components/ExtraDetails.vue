<template>
  <v-card>
    <v-card-title class="teal accent-4 white--text headline pr-12">מידע נוסף</v-card-title>
    <v-card-text class="overflow-y-auto extraDetailsHeight text--primary">
      <slot ></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ExtraDetails"
};
</script>

<style scoped>
.extraDetailsHeight {
  max-height: 18vh;
}
</style>