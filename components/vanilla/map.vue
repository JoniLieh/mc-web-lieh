<template>
  <div>
    <slot />


    <v-card href="https://mc.jonilieh.de/map" target="_blank" class="mb-2">
      <client-only>
        <!-- https://imgur.com/a/Ztq2MIv -->
        <v-img src="https://i.imgur.com/1YLB4fK.png" cover max-height="500px" />
      </client-only>
      <!-- <v-card-text class="caption">
        <a href="https://mc.jonilieh.de/map" target="_blank">
        Rufe die Karte alternativ hier auf
        </a>
        <v-icon small color="primary" right>mdi-open-in-new</v-icon>
      </v-card-text> -->
    </v-card>

    <div class="text-overline text-center">Falls die Karte einen <code>502 Bad Gateway</code> anzeigt, ist der MC-Server gerade offline :)</div>

  </div>
</template>

<script type="ts">
export default {
  name: "MapComponent",
}
</script>

<style lang="scss">
img {
  position: relative !important; // fixes position="top center" not being present as prop
}
</style>
