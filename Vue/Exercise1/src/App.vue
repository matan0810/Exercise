<template>
  <v-app dir="rtl" class="app">
    <template>
      <v-container fill-height>
        <v-layout row>
          <v-flex pl-5 md3 xs3>
            <SideMenu style="height: 100%" />
          </v-flex>
          <v-flex md9 xs9>
            <v-layout column style="height: 100%">
              <v-flex pb-2 style="height: 66%">
                <Yosi style="height: 100%" />
                <!-- <router-view /> -->
              </v-flex>
              <v-flex style="height: 33%">
                <ExtraDetails style="height: 100%"/>
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
import ExtraDetails from "./components/ExtraDetails.vue";
import Yosi from "./components/Yosi.vue";

export default {
  name: "App",
  components: {
    SideMenu,
    ExtraDetails,
    Yosi
  },
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
};
</script>
