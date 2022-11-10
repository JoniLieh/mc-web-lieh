<template>
  <div>
    <slot />

    <v-card href="https://mc.jonilieh.de/map" target="_blank">
      <client-only>
        <!-- https://imgur.com/a/Ztq2MIv -->
        <v-img src="https://i.imgur.com/1YLB4fK.png" max-height="500px" position="top center"/>
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
