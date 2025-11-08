<template>
  <v-alert title="Guides" color="accent" icon="mdi-charity" border="start" variant="tonal">
    <ul>
      <li v-for="(guideItem, guideItemIndex) in guideItems" :key="guideItemIndex">
        <a :href="guideItem.url" target="_blank">
          {{ guideItem.text }}<v-icon v-if="guideItem.url" color="primary" end>mdi-link-variant</v-icon>
        </a>
      </li>
    </ul>
  </v-alert>
</template>

<script lang="ts" setup>
const guideItems = [
  {
    text: "Questbuch-Guides im Inventar oben links",
  },
  {
    text: "Offizielles Minecraft Wiki",
    url: "https://minecraft.fandom.com/de/wiki/Minecraft_Wiki"
  }, 
  {
    text: "Performance Guide",
    url: "https://wiki.lunapixel.gg/performance-guide"
  }, 
  {
    text: "Modpack",
    url: "https://www.curseforge.com/minecraft/modpacks/all-the-mods-10"
  }, 
  {
    text: "Modpack Mods",
    url: "https://www.curseforge.com/minecraft/modpacks/all-the-mods-10/relations/dependencies"
  }
]

</script>

<style></style>