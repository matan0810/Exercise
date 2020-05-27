<template>
  <v-app>
    <v-content>
      <v-container class="light-blue lighten-5" fluid fill-height>
        <v-row class="fullHeight pl-3">
          <v-col class="col-3 pa-6">
            <SideMenu class="fullHeight" />
          </v-col>
          <v-col class="col-9">
            <Details :extraDetails="showExtraDetails" :currentTitle="currentTitle" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import Details from "./components/Details.vue";
import { bus } from "./main.js";

export default {
  name: "App",
  data() {
    return {
      currentTitle: "דואר נכנס"
    };
  },
  computed: {
    showExtraDetails() {
      return this.currentTitle != "דואר זבל";
    }
  },
  components: {
    SideMenu,
    Details
  },
  methods: {
    changeTitle(newTitle) {
      this.currentTitle = newTitle;
    }
  },
  created() {
    bus.$on("changeTitle", this.changeTitle);
  }
};
</script>

<style>
.fullHeight {
  height: 100%;
}
</style>