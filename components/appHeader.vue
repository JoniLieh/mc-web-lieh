<template>
  <v-app-bar flat>
    <v-container>
      <v-row align="center">
        <v-col cols="auto">
          <nuxt-link to="/">
            <v-img src="/images/logo.svg" alt="Logo" aspect-ratio="1/1" height="40" class="rounded"></v-img>
          </nuxt-link>
        </v-col>

        <v-col cols="auto">
          <v-tabs color="primary">
            <v-tab v-for="{ text, link, icon, color } in links" :key="link" :to="link" :prepend-icon="icon" :text="text" :color="color" nuxt />
          </v-tabs>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="auto">
          <v-btn @click="toggleTheme()" class="rounded-pill" icon="mdi-theme-light-dark"></v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDisplay, useTheme } from "vuetify";
const theme = useTheme();

function toggleTheme() { // composable?
  theme.global.name.value = !theme.current.value.dark ? "dark" : "light";
}
</script>

<script lang="ts">
export default {
  data: () => ({
    links: [
      {
        text: "Vanilla",
        link: "/",
        icon: "mdi-sword"
      }, 
      {
        text: "Better MC",
        link: "/bmc",
        icon: "mdi-creation",
        color: "accent"
      },
      {
        text: "Modded",
        link: "/modded",
        icon: "mdi-puzzle",
        color: "accent"
      }, 
    ],
  }),
}
</script>
