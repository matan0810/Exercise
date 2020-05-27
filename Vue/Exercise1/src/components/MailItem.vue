<template>
  <div>
    <v-list-item @click="itemClick">
      <v-list-item-content>
        <v-list-item-title>{{ message.from }}</v-list-item-title>
        <v-list-item-subtitle>{{ message.title }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ contentShow }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text>{{ sendTimeShow }}</v-list-item-action-text>
        <v-icon @click="starClick" :color="favorite ? 'yellow' :'grey lighten-1'">mdi-star</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { bus } from "../main.js"

export default {
  name: "MailItem",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      favorite: false
    };
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
      } else if (daysDiff == 2) {
        lineToShow = "יומיים";
      } else if (daysDiff == 1) {
        lineToShow = "אתמול";
      } else if (hoursDiff > 2) {
        lineToShow = hoursDiff + " שעות";
      } else if (hoursDiff == 2) {
        lineToShow = "שעתיים";
      } else if (hoursDiff == 1) {
        lineToShow = "שעה";
      } else {
        lineToShow =
          new Date().getMinutes() - currentDate.getMinutes() + " דקות";
      }

      return lineToShow;
    }
  },
  methods: {
    timeDiff(date) {
      return new Date(new Date() - date);
    },
    itemClick() {
      bus.$emit("showDetails", this.message);
    },
    starClick(event) {
      this.favorite = !this.favorite;
      event.stopPropagation();
    }
  }
};
</script>
