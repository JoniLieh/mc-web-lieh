<template>
  <v-carousel :height="imgHeight" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="({src, alt}, index) in items" :key="index" :src="src" :alt="alt" cover rounded></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts" setup>
interface carouselItem {
  src: string;
  alt?: string;
}

const items: carouselItem[] = [
  {
    src: "https://media.forgecdn.net/attachments/983/81/2024-10-03_12.png"
  }, {
    src: "https://media.forgecdn.net/attachments/980/939/2024-10-02_23.png"
  }, {
    src: "https://media.forgecdn.net/attachments/983/80/2024-10-05_14.png"
  }, {
    src: "https://media.forgecdn.net/attachments/983/79/2024-10-03_12.png"
  }, {
    src: "https://media.forgecdn.net/attachments/980/938/image-1.png"
  }, {
    src: "https://media.forgecdn.net/attachments/980/942/2024-10-03_12.png"
  }, {
    src: "https://media.forgecdn.net/attachments/980/943/2024-10-03_12.png"
  }
];

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const imgHeight = computed(() => {
  switch (mobile.value) {
    case true:
      return '300px'
    case false:
      return '700px'
  }
});
</script>

<style></style>