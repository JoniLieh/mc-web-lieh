<template>
  <v-carousel :height="imgHeight" cycle>
    <v-carousel-item v-for="({src, alt}, index) in items" :key="index" :src="src" :alt="alt" cover rounded></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts" setup>
interface carouselItem {
  src: string;
  alt: string;
}

const items: carouselItem[] = [
  {
    src: "https://media.forgecdn.net/attachments/714/538/aether.png",
    alt: "Explore an Aether-themed dimension",
  }, {
    src: "https://media.forgecdn.net/attachments/714/537/dungeon.png",
    alt: "Revamped small dungeon",
  }, {
    src: "https://media.forgecdn.net/attachments/714/544/path.jpg",
    alt: "New building blocks make builds look much better",
  }, {
    src: "https://media.forgecdn.net/attachments/714/534/savannah.jpg",
    alt: "All biomes are overhauled",
  }, {
    src: "https://media.forgecdn.net/attachments/714/536/illagercastle.png",
    alt: "An illager castle",
  }, {
    src: "https://media.forgecdn.net/attachments/714/535/redwood.jpg",
    alt: "A beautiful redwood forest",
  }, {
    src: "https://media.forgecdn.net/attachments/712/687/better_background.png",
    alt: "Islands in the End",
  }, {
    src: "https://media.forgecdn.net/attachments/714/524/end.png",
    alt: "Explore the new End",
  }, {
    src: "https://media.forgecdn.net/attachments/714/543/cabin.jpg",
    alt: "Build your dream base",
  }, {
    src: "https://media.forgecdn.net/attachments/714/545/golem.jpg",
    alt: "New crops and new foods",
  },
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