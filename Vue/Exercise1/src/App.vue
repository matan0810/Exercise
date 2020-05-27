<template>
  <v-app>
    <v-content>
      <v-container class="light-blue lighten-5" fluid fill-height>
        <v-row class="fullHeight pl-3">
          <v-col class="col-3 pa-6">
            <SideMenu class="fullHeight" />
          </v-col>
          <v-col class="col-9">
            <Details />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import Details from "./components/Details.vue";

export default {
  name: "App",
  components: {
    SideMenu,
    Details
  }
};
</script>

<style>
.fullHeight {
  height: 100%;
}
</style>