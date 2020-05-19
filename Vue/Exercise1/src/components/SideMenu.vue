<template>
  <v-card>
    <v-card-title class="teal accent-4 white--text headline pr-12">תפריט</v-card-title>
    <v-card-text class="text--primary">
      <v-list rounded>
        <v-list-item-group v-model="currentItem" color="primary">
          <v-list-item v-for="(item, i) in sideBarItems" :key="i" link>
            <v-icon class="ma-4">{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      sideBarItems: [
        { title: "דואר נכנס", icon: "mdi-email" },
        { title: "דואר יוצא", icon: "mdi-send" },
        { title: "דואר זבל", icon: "mdi-close" }
      ],
      currentItem: 0
    };
  },
  methods: {
    getItemById: function(id) {
      return this.sideBarItems.find(item => item.id == id);
    }
  },
  watch: {
    currentItem: function() {
      if (this.currentItem != undefined) {
        this.$emit("changeTitle", this.sideBarItems[this.currentItem].title);
      }
    }
  }
};
</script>
