<template>
  <v-card>
    <v-card-title class="teal accent-4 white--text headline pr-12">תפריט</v-card-title>
    <v-card-text class="text--primary">
      <v-list rounded>
        <v-list-item-group color="primary" mandatory>
          <v-list-item @click="changeTitle" v-for="item in sideBarItems" :key="item.title" link>
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
      ]
    };
  },
  methods: {
    changeTitle: function(event) {
      let newTitle = event.target.textContent;

      if (!newTitle) {
        newTitle = event.target.nextElementSibling.textContent;
      }

      this.$emit("changeTitle", newTitle);
    }
  }
};
</script>
