<template>
  <v-app>
    <v-content>
      <v-container class="light-blue lighten-5" fluid fill-height>
        <v-row class="fullHeight pl-3">
          <v-col class="col-3">
            <v-container class="fullHeight">
              <SideMenu class="fullHeight" @changeTitle="changeTitle" />
            </v-container>
          </v-col>
          <v-col class="col-9">
            <v-row v-bind:class="[showExtraDetails ? 'twoThirdsHeight' : 'fullHeight']">
              <v-col>
                <Details :currentTitle="currentTitle" />
              </v-col>
            </v-row>
            <v-row class="thirdHeight" v-if="showExtraDetails">
              <v-col>
                <ExtraDetails class="fullHeight" />
              </v-col>
            </v-row>
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
  height: 34%;
}
</style>