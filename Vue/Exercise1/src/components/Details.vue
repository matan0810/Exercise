<template>
  <div class="fullHeight">
    <v-row :class="[showExtraDetails ? 'twoThirdsHeight' : 'fullHeight']">
      <v-col>
        <MailCard :title="currentTitle">
          <v-card-text
            :class="[showExtraDetails ? 'twoThirdsDetailsHeight' : 'fullDetailsHeight']"
            class="overflow-y-auto text--primary"
          >
            <Inbox v-show="currentTitle === 'דואר נכנס'" />
            <Outbox v-show="currentTitle === 'דואר יוצא'" />
            <Spam v-show="currentTitle === 'דואר זבל'" />
            <NewMessage v-show="currentTitle === 'הודעה חדשה'" />
          </v-card-text>
        </MailCard>
      </v-col>
    </v-row>
    <v-row class="thirdHeight" v-if="showExtraDetails">
      <v-col>
        <ExtraDetails />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { bus } from "../main.js";
import ExtraDetails from "./ExtraDetails";
import Inbox from "./Inbox.vue";
import Outbox from "./Outbox.vue";
import Spam from "./Spam.vue";
import NewMessage from "./NewMessage.vue";
import MailCard from "./MailCard.vue";

export default {
  name: "Details",
  data() {
    return {
      currentTitle: "דואר נכנס"
    };
  },
  components: {
    ExtraDetails,
    Inbox,
    Outbox,
    Spam,
    NewMessage,
    MailCard
  },
  computed: {
    currentBox() {
      let currComponent = [];
      if (this.currentTitle === "דואר נכנס") {
        currComponent = Inbox;
      } else if (this.currentTitle === "דואר יוצא") {
        currComponent = Outbox;
      } else if (this.currentTitle === "דואר זבל") {
        currComponent = Spam;
      } else if (this.currentTitle === "הודעה חדשה") {
        currComponent = NewMessage;
      }

      return currComponent;
    },
    showExtraDetails() {
      return (
        this.currentTitle === "דואר נכנס" || this.currentTitle === "דואר יוצא"
      );
    }
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

<style scoped>
.twoThirdsHeight {
  height: 66%;
}

.thirdHeight {
  height: 34%;
}

.fullDetailsHeight {
  max-height: 81vh;
  height: 100%;
}

.twoThirdsDetailsHeight {
  max-height: 50vh;
  height: 100%;
}
</style>