<template>
  <v-alert title="Guides" color="accent" icon="mdi-charity" border="start" variant="tonal">
    <ul>
      <li v-for="(guideItem, guideItemIndex) in guideItems" :key="guideItemIndex">
        <a :href="guideItem.url" target="_blank">
          {{ guideItem.text }} <v-icon color="primary" end>mdi-link-variant</v-icon>
        </a>
      </li>
    </ul>
  </v-alert>
</template>

<script lang="ts" setup>
const guideItems = [
  {
    text: "Offizielles Mindecraft Wiki",
    url: "https://minecraft.fandom.com/de/wiki/Minecraft_Wiki"
  }, 
  {
    text: "Performance Guide",
    url: "https://github.com/LunaPixelStudios/Better-MC/wiki/Performance-Guide/"
  },
  {
    text: "Modpack",
    url: "https://www.curseforge.com/minecraft/modpacks/better-mc-fabric-bmc1"
  }, 
  {
    text: "Modpack Mods",
    url: "https://www.curseforge.com/minecraft/modpacks/better-mc-fabric-bmc1/relations/dependencies"
  }, 
  {
    text: "AdventureZ",
    url: "https://globoxwiki.com/mods/adventurez/"
  }
]

</script>

<style></style>