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
        <v-icon
          @click="starClick"
          :color="favorite ? 'yellow' :'grey lighten-1'"
        >mdi-star</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-divider />
  </div>
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
      favorite: false
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
          new Date().getMinutes() - this.message.sent.getMinutes() + " דקות";
      }

      return lineToShow;
    }
  },
  methods: {
    timeDiff: function(date) {
      return new Date(new Date() - date);
    },
    itemClick: function() {
      this.$emit("itemClick", this.message);
    },
    starClick: function(event) {
      this.favorite = !this.favorite;
      event.stopPropagation()
}
  }
};
</script>
