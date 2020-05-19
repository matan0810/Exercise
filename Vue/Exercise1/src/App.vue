<template>
  <v-app>
    <v-content>
      <v-container class="light-blue lighten-5" fluid fill-height>
        <v-row class="fullHeight">
          <v-col class="col-3" pl-5>
            <SideMenu @changeTitle="changeTitle" class="fullHeight" />
          </v-col>
          <v-col class="col-9" fill-height pr-5>
            <v-flex v-bind:class="[showExtraDetails ? 'twoThirdsHeight' : 'fullHeight']">
              <Details :currentTitle="currentTitle" />
            </v-flex>
            <v-flex class="thirdHeight" pt-3 v-if="showExtraDetails">
              <ExtraDetails class="fullHeight" />
            </v-flex>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
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

<style scoped>
.fullHeight {
  height: 100%;
}

.twoThirdsHeight {
  height: 66%;
}

.thirdHeight {
  height: 33%;
}
</style>