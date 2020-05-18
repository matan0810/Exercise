<template>
  <!-- <div class="mailItem">
    <v-card>
      <v-card-title>{{ sender }}</v-card-title>

      <v-row>
        <v-col>
          <v-card-subtitle>{{ title }}</v-card-subtitle>
          <v-card-text>{{ content }}</v-card-text>
        </v-col>

        <v-col>
          <p>? דקות</p>
          <v-rating
            v-model="rating"
            :length="1"
            :clearable="true"
            color="yellow darken-1"
            background-color="yellow darken-1"
          ></v-rating>
        </v-col>
      </v-row>

      <v-divider class="pb-3" />
    </v-card>v-slot:default="{ active }"
  </div>--> 
  <v-card>
    <v-list-item> 
      <v-list-item-content>
        <v-list-item-title>{{ item.from }}</v-list-item-title>
        <v-list-item-subtitle class="text--primary">{{ item.title }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text>{{ item.sent }}</v-list-item-action-text>
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
    <v-divider class="pb-3" />
  </v-card>
</template>

<script>
export default {
  name: "MailItem",
  props: {
    message: {
      type: Object,
      required: false // todo: true
    }
  },
  data: () => {
    return {
      item: {
        id: 1,
        sent: "15 min",
        title: "Brunch this weekend?",
        from: "Ali Connors",
        content:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      }
    };
  }
};
</script>
