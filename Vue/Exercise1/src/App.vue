<template>
  <v-app dir="rtl" class="app">
    <template>
      <v-container class="light-blue lighten-5" px-8 py-4 fluid fill-height>
        <v-layout row>
          <v-flex pl-5 md3 xs3>
            <SideMenu @changeTitle="changeTitle($event)" style="height: 100%" />
          </v-flex>
          <v-flex pr-5 md9 xs9>
            <v-layout column style="height: 100%">
              <v-flex style="height: 66%">
                <Details :currentTitle="this.currentTitle" />
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
import SideMenu from "./components/SideMenu.vue";
import Details from "./components/Details.vue";
import ExtraDetails from "./components/ExtraDetails.vue";

export default {
  name: "App",
  data() {
    return {
      currentTitle: "דואר נכנס"
    };
  },
  computed: {
    showExtraDetails: function() {
      return this.currentTitle != "דואר זבל";
    }
  },
  components: {
    SideMenu,
    Details,
    ExtraDetails
  },
  methods: {
    changeTitle: function(newTitle) {
      this.currentTitle = newTitle;
    }
  }
};
</script>

