<template>
  <MailCard :title="'תפריט'">
    <v-card-text class="text--primary">
      <v-list rounded>
        <v-list-item-group v-model="currentItem" color="primary" mandatory>
          <router-link
            class="sideMenuLink"
            v-for="item in sideBarItems"
            :key="item.meta.id"
            :to="item.path"
          >
            <v-list-item :value="item.meta.id" link>
              <v-icon class="ma-4">{{ item.meta.icon }}</v-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </MailCard>
</template>

<script>
import MailCard from "./MailCard.vue";
import { mapActions } from "vuex";

export default {
  name: "SideMenu",
  data() {
    return {
      sideBarItems: this.$router.options.routes,
      currentItem: 1
    };
  },
  components: {
    MailCard
  },
  watch: {
    $route() {
      this.currentItem = this.$route.meta.id;
      this.hideExtraDetails();
    }
  },
  methods: {
    ...mapActions(["hideExtraDetails"])
  }
};
</script>

<style scoped>
.sideMenuLink {
  text-decoration: none;
}
</style>