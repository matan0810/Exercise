<template>
  <div id="app">
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="to" :counter="20" :rules="addresseeRules" label="נמען" required />
      <v-text-field v-model="title" :rules="titleRules" label="נושא" :counter="40" required />
      <v-textarea
        v-model="content"
        :rules="contentRules"
        label="תוכן"
        :counter="200"
        auto-grow
        rows="5"
        required
      />
      <v-btn rounded :disabled="!valid" color="success" class="mr-4" @click="send">שלח</v-btn>
      <v-btn rounded :disabled="!valid" color="primary" class="mr-4" @click="sendMyself">שלח לעצמי</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NewMessage",
  data() {
    return {
      valid: true,
      to: "",
      title: "",
      content: "",
      addresseeRules: [
        value => !!value || "אנא הכנס נמען",
        value => /[A-Za-zא-ת]+\d*/.test(value) || "נמען חייב להכיל אותיות",
        value => (value && value.length <= 20) || "נמען חייב להכיל עד 20 תווים"
      ],
      titleRules: [
        value => !!value || "אנא הכנס נושא",
        value => (value && value.length <= 40) || "נושא חייב להכיל עד 40 תווים"
      ],
      contentRules: [
        value => !!value || "אנא הכנס תוכן",
        value =>
          (value && value.length <= 200) || "תוכן חייב להכיל עד 200 תווים"
      ]
    };
  },
  methods: {
    ...mapActions(["addOutboxMessage", "addInboxMessage"]),
    send() {
      if (this.$refs.form.validate()) {
        const newMessage = {
          id: this.currentMessagesId,
          to: this.to,
          title: this.title,
          from: "Me",
          sent: Date.now(),
          content: this.content,
          favorite: false
        };

        if (this.$refs.form.validate()) {
          this.addOutboxMessage(newMessage);

          this.$refs.form.reset();

          this.$router.push({ name: "Outbox" });

          alert("ההודעה נשלחה!");
        }
      }
    },
    sendMyself() {
      if (this.$refs.form.validate()) {
        const newMessage = {
          id: this.currentMessagesId,
          to: "Me",
          title: this.title,
          from: "Me",
          sent: Date.now(),
          content: this.content,
          favorite: false
        };

        if (this.$refs.form.validate()) {
          this.addInboxMessage(newMessage);

          this.$refs.form.reset();

          this.$router.push({ name: "Inbox" });

          alert("ההודעה נשלחה!");
        }
      }
    }
  },
  computed: {
    ...mapState(["currentMessagesId"])
  }
};
</script>
