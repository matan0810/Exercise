<template>
  <div>
    <v-list-item :class="{ 'blue lighten-4': isSentByMe  }" @click="itemClick">
      <v-list-item-content>
        <v-list-item-title>{{ message.from }}</v-list-item-title>
        <v-list-item-subtitle>{{ message.title }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ contentShow }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text>{{ sendTimeShow }}</v-list-item-action-text>
        <v-row>
          <div v-if="$route.name === 'Inbox'">
            <v-tooltip close-delay bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" @click="deleteItem">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span v-text="'העבר לזבל'" />
            </v-tooltip>

            <v-tooltip close-delay bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" @click="replyItem">
                  <v-icon color="black">mdi-reply</v-icon>
                </v-btn>
              </template>
              <span v-text="'השב'" />
            </v-tooltip>
          </div>

          <v-tooltip v-else-if="$route.name === 'Spam'" close-delay bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" @click="restoreItem">
                <v-icon color="black">mdi-arrow-up</v-icon>
              </v-btn>
            </template>
            <span v-text="'שחזר'" />
          </v-tooltip>

          <v-tooltip close-delay bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" @click="starClick">
                <v-icon :color="message.favorite ? 'yellow' :'grey lighten-1'">mdi-star</v-icon>
              </v-btn>
            </template>
            <span v-text="'הוסף למועדפים'" />
          </v-tooltip>
        </v-row>
      </v-list-item-action>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MailItem",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    contentShow() {
      let contentToShow = this.message.content;

      if (contentToShow.length > 40) {
        contentToShow = contentToShow.slice(0, 40) + "...";
      }

      return contentToShow;
    },
    sendTimeShow() {
      let lineToShow = "";

      let currentDate = new Date(this.message.sent);

      let daysDiff = new Date().getDate() - currentDate.getDate();
      let hoursDiff = new Date().getHours() - currentDate.getHours();
      if (
        new Date().getYear() - currentDate.getYear() > 0 ||
        new Date().getMonth() - currentDate.getMonth() > 0 ||
        daysDiff > 7
      ) {
        lineToShow = currentDate;
      } else if (7 >= daysDiff && daysDiff > 2) {
        lineToShow = daysDiff + " ימים";
      } else if (daysDiff === 2) {
        lineToShow = "יומיים";
      } else if (daysDiff === 1) {
        lineToShow = "אתמול";
      } else if (hoursDiff > 2) {
        lineToShow = hoursDiff + " שעות";
      } else if (hoursDiff === 2) {
        lineToShow = "שעתיים";
      } else if (hoursDiff === 1) {
        lineToShow = "שעה";
      } else {
        lineToShow =
          new Date().getMinutes() - currentDate.getMinutes() + " דקות";
      }

      return lineToShow;
    },
    isSentByMe() {
      return this.message.from === "Me" && this.$route.name === "Outbox";
    }
  },
  methods: {
    ...mapActions([
      "updateExtraDetails",
      "toggleMessageFavoriteById",
      "deleteMessageById",
      "restoreMessageById",
      "replyMessageById"
    ]),
    timeDiff(date) {
      return new Date(new Date() - date);
    },
    itemClick() {
      this.updateExtraDetails(this.message);
    },
    starClick(event) {
      event.stopPropagation();

      this.toggleMessageFavoriteById(this.message.id);
    },
    deleteItem() {
      event.stopPropagation();

      this.deleteMessageById(this.message.id);
    },
    restoreItem() {
      event.stopPropagation();

      this.restoreMessageById(this.message.id);
    },
    replyItem() {
      event.stopPropagation();

      this.replyMessageById(this.message.id);
    }
  }
};
</script>
