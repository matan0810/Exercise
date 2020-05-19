<template>
  <v-card tile>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold subtitle-1">{{ message.from }}</v-list-item-title>
        <v-list-item-subtitle class="py-1 text--primary">{{ message.title }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ contentShow }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text>{{ sendTimeShow }}</v-list-item-action-text>
        <!-- <v-icon v-if="!active" color="grey lighten-1">mdi-star</v-icon>
        <v-icon v-else color="yellow">mdi-star-outline</v-icon>-->
        <v-rating
          v-model="rating"
          :length="1"
          :clearable="true"
          color="yellow darken-1"
          background-color="yellow darken-1"
        ></v-rating>
      </v-list-item-action>
    </v-list-item>
    <v-divider class="pb-1" />
  </v-card>
</template>

<script>
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
      rating: 0
    };
  },
  computed: {
    contentShow: function() {
      let contentToShow = this.message.content;

      if (contentToShow.length > 40) {
        contentToShow = contentToShow.slice(0, 40) + "...";
      }

      return contentToShow;
    },
    sendTimeShow: function() {
      let lineToShow = "";

      let daysDiff = new Date().getDate() - this.message.sent.getDate();
      let hoursDiff = new Date().getHours() - this.message.sent.getHours();
      if (
        new Date().getYear() - this.message.sent.getYear() > 0 ||
        new Date().getMonth() - this.message.sent.getMonth() > 0 ||
        daysDiff > 7
      ) {
        lineToShow = this.message.sent;
      } else if (7 >= daysDiff && daysDiff > 2) {
        lineToShow = daysDiff + " ימים";
      } else if (daysDiff == 2) {
        lineToShow = "יומייים";
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
          new Date().getMinutes() - this.message.sent.getMinutes() + " דקות";
      }

      return lineToShow;
    }
  },
  methods: {
    timeDiff: function(date) {
      return new Date(new Date() - date);
    }
  }
};
</script>
