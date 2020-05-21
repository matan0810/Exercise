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
            <v-row :class="[showExtraDetails ? 'twoThirdsHeight' : 'fullHeight']">
              <v-col>
                <Details
                  @showDetails="extraDetails"
                  :extraDetails="showExtraDetails"
                  :currentTitle="currentTitle"
                />
              </v-col>
            </v-row>
            <v-row class="thirdHeight" v-if="showExtraDetails">
              <v-col>
                <ExtraDetails class="fullHeight">
                  <div>
                    <h3 class="pt-3">{{ extraDetailsTitle }}</h3>
                    <h5 class="pt-2">{{ extraDetailsFrom }}</h5>
                    <p>{{ extraDetailsContent }}</p>
                  </div>
                </ExtraDetails>
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
      currentTitle: "דואר נכנס",
      extraDetailsTitle: "",
      extraDetailsFrom: "",
      extraDetailsContent: ""
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
    },
    extraDetails: function(message) {
      this.extraDetailsTitle = `נושא: ${message.title}`;
      this.extraDetailsFrom = `נשלח על ידי: ${message.from}`;
      this.extraDetailsContent = `תוכן: ${message.content}`;
    }
  }
};
</script>

<style>
.fullHeight {
  height: 100%;
}
</style>

<style scoped>
.twoThirdsHeight {
  height: 66%;
}

.thirdHeight {
  height: 34%;
}
</style>