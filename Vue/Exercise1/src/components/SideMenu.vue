<template>
  <MailCard :title="'תפריט'">
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
  </MailCard>
</template>

<script>
import { bus } from "../main.js";
import MailCard from "./MailCard.vue";

export default {
  name: "SideMenu",
  data() {
    return {
      sideBarItems: [
        { title: "דואר נכנס", icon: "mdi-email" },
        { title: "דואר יוצא", icon: "mdi-send" },
        { title: "דואר זבל", icon: "mdi-delete" }
      ]
    };
  },
  components: {
    MailCard
  },  
  methods: {
    changeTitle(event) {
      let newTitle = event.target.textContent;

      if (!newTitle) {
        newTitle = event.target.nextElementSibling.textContent;
      }

      bus.$emit("changeTitle", newTitle);
    }
  }
};
</script>
