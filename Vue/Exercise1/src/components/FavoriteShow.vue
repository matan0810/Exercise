<template>
  <div>
    <v-tooltip close-delay top>
      <template v-slot:activator="{ on }">
        <v-btn
          absolute
          small
          left
          fab
          class="mt-4 mx-2"
          v-on="on"
          :color="showOnlyFavorites ? 'grey darken-1' : 'grey lighten-1'"
          @click="favoriteClick"
        >
          <v-icon :color="showOnlyFavorites ? 'yellow darken-1' : 'yellow lighten-1'">mdi-star</v-icon>
        </v-btn>
      </template>
      <span v-text="showOnlyFavorites ? 'בטל הצגת מועדפים' : 'הצג מועדפים'"></span>
    </v-tooltip>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "FavoriteShow",
  methods: {
    ...mapActions(["favoriteClick"])
  },
  computed: {
    ...mapState(["showOnlyFavorites"])
  }
};
</script>
