<template>
  <MailCard :title="'תפריט'">
    <v-card-text class="text--primary">
      <v-list rounded>
        <v-list-item-group v-model="mark" color="primary" mandatory>
          <router-link class="sideMenuLink" v-for="item in sideBarItems" :key="item.id" :to="item.route">
            <v-list-item @click="changeTitle" :value="item.id" link>
              <v-icon class="ma-4">{{ item.icon }}</v-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
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
        {
          id: 0,
          title: "הודעה חדשה",
          icon: "mdi-email-outline",
          route: "/newMessage"
        },
        { id: 1, title: "דואר נכנס", icon: "mdi-email", route: "/" },
        { id: 2, title: "דואר יוצא", icon: "mdi-send", route: "/outbox" },
        { id: 3, title: "דואר זבל", icon: "mdi-delete", route: "/spam" }
      ],
      mark: 1
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
    },
    changeSideMenuMark() {
      this.mark = 2;
    }
  },
  created() {
    bus.$on("newMessage", this.changeSideMenuMark);
  }
};
</script>

<style scoped>
.sideMenuLink {
  text-decoration: none;
}
</style>