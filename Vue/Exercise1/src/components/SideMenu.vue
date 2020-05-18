<template>
  <v-card>
    <v-card-title class="teal accent-4 white--text headline pr-12">תפריט</v-card-title>
    <v-card-text class="text--primary">
      <v-list rounded>
        <v-list-item-group v-model="currentItem" color="primary">
          <router-link
            v-for="(item, i) in sideBarItems"
            :key="i"
            :to="item.route"
            style="text-decoration: none"
          >
            <v-list-item link>
              <v-icon class="ma-4">{{ item.icon }}</v-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SideMenu",
  data() {
    return {
      sideBarItems: [
        { id: 0, title: "דואר נכנס", icon: "mdi-email", route: "/" },
        { id: 1, title: "דואר יוצא", icon: "mdi-send", route: "/outbox" },
        { id: 2, title: "דואר זבל", icon: "mdi-close", route: "/spam" }
      ],
      currentItem: 0
    };
  },
  methods: {
    ...mapActions(["changePage"]),
    getItemById: function(id) {
      return this.sideBarItems.find(item => item.id == id);
    }
  },
  watch: {
    currentItem: function() {
      if (this.currentItem != undefined) {
        this.changePage(this.getItemById(this.currentItem));
      }
    }
  }
};
</script>
