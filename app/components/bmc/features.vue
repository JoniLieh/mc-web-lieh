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
  "Completely Overhauled World Generation (Oh The Biomes You'll Go, Geophilic, Ecologics)",
  "Over 100 Quests",
  "Fully Optimized with Shader Support",
  "5 New Dimensions",
  "New Bosses and Mobs (AdventureZ, Bosses of Mass Destruction, Naturalist)",
  "Hundreds of NEW Dungeons & Structures (When Dungeons Arise, Explorify, Repurposed Structures)",
  "Rideable Dragons",
  "Tons of Building Blocks",
  "QoL Features such as Waystones and XP Obelisks",
  "Xaero's Minimap",
  "250+ Mods ",
]
</script>

<style scoped>
li {
  list-style: none;
}
</style>