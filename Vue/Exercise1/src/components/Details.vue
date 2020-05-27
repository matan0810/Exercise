<template>
  <div class="fullHeight">
    <v-row :class="[showExtraDetails ? 'twoThirdsHeight' : 'fullHeight']">
      <v-col>
        <MailCard :title="currentTitle">
          <v-card-text
            :class="[showExtraDetails ? 'twoThirdsDetailsHeight' : 'fullDetailsHeight']"
            class="overflow-y-auto text--primary"
          >
            <keep-alive>
              <component :is="currentBox" />
            </keep-alive>
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
      currentTitle: "הודעה חדשה"
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
    currentMessages() {
      let messegesList = [];
      if (this.currentTitle === "דואר נכנס") {
        messegesList = this.inboxMessages;
      } else if (this.currentTitle === "דואר יוצא") {
        messegesList = this.outBoxMessages;
      } else if (this.currentTitle === "דואר זבל") {
        messegesList = this.spamMessages;
      }

      return messegesList;
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