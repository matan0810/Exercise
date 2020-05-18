<template>
  <div class="home">
    <v-card style="height: 100%">
      <v-card-title class="teal accent-4 white--text">{{ title }}</v-card-title>
      <v-card-text class="text--primary mt-5">גגג</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {},
  data: () => {
    return {};
  }
};
</script>
