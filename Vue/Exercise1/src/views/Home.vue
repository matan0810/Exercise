<template>
  <div class="home">
    <v-card>
      <v-card-title class="teal accent-4 white--text">דואר נכנס</v-card-title>
      <v-card-text class="text--primary mt-5">
        <mailItem :sender="sender" :title="title" :content="content" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import mailItem from "../components/MailItem.vue";

export default {
  name: "Home",
  components: {
    mailItem
  },
  data: () => {
    return {
      sender: "Me",
      title: "hello",
      content: "yeyeyesss.."
    };
  }
};
</script>
