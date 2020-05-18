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
            <v-list-item v-bind:class="{ active: true }" link>
              <v-list-item-content pr-3>
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
        { id: 0, title: "דואר נכנס", route: "/" },
        { id: 1, title: "דואר יוצא", route: "/outbox" }
        // { id: 2, title: "דואר זבל", route: "/spam" }
      ],
      currentItem: 0
    };
  },
  methods: {
    ...mapActions(["changePageTitle"]),
    getItemById: function(id) {
      return this.sideBarItems.find(item => item.id == id);
    }
  },
  watch: {
    currentItem: function() {
      this.changePageTitle(this.getItemById(this.currentItem).title);
    }
  }
};
</script>
