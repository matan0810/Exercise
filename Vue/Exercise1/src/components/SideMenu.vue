<template>
  <v-card class="mx-auto">
    <v-card-title class="teal accent-4 white--text">תפריט</v-card-title>
    <v-card-text class="text--primary mt-5">
      <v-list>
        <router-link
          v-for="([icon, title, path], i) in items"
          :key="i"
          :to="{path}"
          style="text-decoration: none"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="pr-5">
              <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SideMenu",
  data: () => {
    return {
      items: [
        ["mdi-email", "דואר נכנס", "/"],
        ["mdi-email-outline", "דואר יוצא", "/outbox"],
        ["mdi-close-box", "דואר זבל", "/spam"]
      ]
    };
  }
};
</script>

<style>
</style>