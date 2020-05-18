<template>
  <v-app dir="rtl" class="app">
    <template>
      <v-container class="light-blue lighten-5" px-8 py-4 fluid fill-height>
        <v-layout row>
          <v-flex pl-5 md3 xs3>
            <SideMenu style="height: 100%" />
          </v-flex>
          <v-flex pr-5 md9 xs9>
            <v-layout column style="height: 100%">
              <v-flex style="height: 66%">
                <Details />
              </v-flex>
              <v-flex pt-3 style="height: 34%" v-if="this.showExtraDetails">
                <ExtraDetails style="height: 100%" />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import SideMenu from "./components/SideMenu.vue";
import Details from "./components/Details.vue";
import ExtraDetails from "./components/ExtraDetails.vue";

export default {
  name: "App",
  computed: {
    ...mapState(["currentPage"]),
    showExtraDetails: function() {
      return this.currentPage.title != "דואר זבל";
    }
  },
  components: {
    SideMenu,
    Details,
    ExtraDetails
  }
};
</script>
