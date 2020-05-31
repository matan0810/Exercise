<template>
  <div id="app">
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="addressee"
        :counter="20"
        :rules="addresseeRules"
        label="נמען"
        required
      />
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
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit" rounded>submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import { bus } from "../main.js";
import { currentId } from "../data/mails.json";

export default {
  name: "NewMessage",
  data() {
    return {
      valid: true,
      addressee: "",
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
      ],
      currentId
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        let newMessage = {
          id: this.currentId,
          addressee: this.addressee,
          title: this.title,
          from: "Me",
          sent: Date.now(),
          content: this.content
        };

        this.currentId += 1;

        bus.$emit("newMessage", newMessage);
        bus.$emit("changeTitle", "דואר יוצא");

        this.$refs.form.reset();

        alert("ההודעה נשלחה!");
      }
    }
  }
};
</script>
