<template>
  <v-card class="fullHeight">
    <v-card-title class="teal accent-4 white--text headline pr-12">
      {{ title }}
      <FavoriteButton v-if="showFavorite" />
    </v-card-title>
    <slot></slot>
  </v-card>
</template>

<script>
import FavoriteButton from "./FavoriteButton";

export default {
  name: "MailCard",
  components: {
    FavoriteButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    showFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>