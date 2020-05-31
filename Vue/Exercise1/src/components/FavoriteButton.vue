<template>
  <div>
    <v-btn v-model="favortieState" absolute small left fab class="mt-4 mx-2">
      <v-icon color="yellow">mdi-star</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "FavoriteButton",
  data() {
    return {
      favortieState: false
    };
  }
};
</script>
