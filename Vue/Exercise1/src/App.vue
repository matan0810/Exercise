<template>
  <v-app dir="rtl" class="app">
    <v-content>
      <v-container>
        <v-row>
          <v-col class="col-3">
            <v-container>
              <SideMenu />
            </v-container>
          </v-col>
          <v-col class="col-9">
            <v-col>
              <router-view />
            </v-col>
            <v-col>
              <ExtraDetails />
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import ExtraDetails from "./components/ExtraDetails.vue";

export default {
  name: "App",
  components: {
    SideMenu,
    ExtraDetails
  }
};
</script>
