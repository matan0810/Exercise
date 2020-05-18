<template>
  <v-card class="mx-auto">
    <v-card-title class="teal accent-4 white--text">תפריט</v-card-title>
    <v-card-text class="text--primary mt-5">
      <v-list>
        <router-link
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
          style="text-decoration: none"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="pr-5">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        { icon: "mdi-email", title: "דואר נכנס", route: "/" },
        { icon: "mdi-email-outline", title: "דואר יוצא", route: "/outbox" },
        { icon: "mdi-close-box", title: "דואר זבל", route: "/spam" }
      ]
    };
  }
};
</script>

<style>
</style>