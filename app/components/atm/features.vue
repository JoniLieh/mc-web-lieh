<template>
  <div>
    <ul>
      <li v-for="(item, itemIndex) in features" :key="itemIndex">
        <v-icon color="accent" start>mdi-check</v-icon>{{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const features = [
  "The top pack of 2025 with around 500 mods! Tons of quests and a proper endgame.",
  "Shipped with shaders and a performance-optimized mod selection for smooth gameplay.",
  "Includes popular mods like Applied Energistics, Mekanism, Ars Nouveau, ...",
  "Custom quests to guide you through the modpack and provide goals.",
]
</script>

<style scoped>
li {
  list-style: none;
}
</style>