<template>
  <v-app-bar scroll-behavior="elevate" elevation="1" style="border-top-left-radius: 0 !important; border-top-right-radius: 0 !important" rounded>
    <v-container>
      <v-row align="center">
        <v-col cols="auto">
          <nuxt-link to="/">
            <v-img src="/images/logo.svg" alt="Logo" aspect-ratio="1/1" height="40" class="rounded"></v-img>
          </nuxt-link>
        </v-col>

        <v-col cols="auto">
          <v-tabs color="primary">
            <v-tab v-for="{ text, link, icon, color } in links" :key="link" :to="link" :prepend-icon="icon" :text="text" :color="color">
              <template #prepend>
                <v-icon v-if="icon.startsWith('mdi-')">{{ icon }}</v-icon>
                <v-img v-else :src="icon" :alt="`Icon ${text}`" width="36" height="36" class="rounded"></v-img>
              </template>
            </v-tab>
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
// https://github.com/PrismLauncher/PrismLauncher/tree/develop/launcher/resources/multimc/scalable
export default {
  data: () => ({
    links: [
      {
        text: "Allgemein",
        link: "/",
        icon: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Gameplay-Trailer_MC-OV-logo_300x300.png"
      }, 
      {
        text: "Better MC",
        link: "/bmc",
        icon: "https://media.forgecdn.net/avatars/thumbnails/1095/963/64/64/638641361377079410.png",
        color: "purple"
      },
      {
        text: "Modded",
        link: "/modded",
        icon: "/images/prismlauncher-icon.svg",
        color: "accent"
      }, 
      {
        text: "ATM",
        link: "/atm",
        icon: "https://media.forgecdn.net/avatars/thumbnails/1182/438/64/64/638755918649288941.png",
        color: "yellow-darken-2"
      }, 
      {
        text: "Status",
        link: "/status",
        icon: "mdi-server",
        color: "success"
      }, 
    ],
  }),
}
</script>
