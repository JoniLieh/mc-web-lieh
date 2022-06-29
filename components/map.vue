<template>
  <div>
    <slot />

    <v-card href="https://mc.jonilieh.de/map" target="_blank">
      <client-only>
        <v-img src="https://i.imgur.com/B5HOMej.pngpng" max-height="500px" position="top center"/>

      </client-only>
      <!-- <v-card-text class="caption">
        <a href="https://mc.jonilieh.de/map" target="_blank">
        Rufe die Karte alternativ hier auf
        </a>
        <v-icon small color="primary" right>mdi-open-in-new</v-icon>
      </v-card-text> -->
    </v-card>

  </div>
</template>

<script type="ts">
export default {
  name: "MapComponent",

  data() {
    return {
    }
  }
}
</script>
