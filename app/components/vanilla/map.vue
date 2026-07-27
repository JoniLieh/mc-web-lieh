<template>
  <div>
    <slot />

    <v-card href="https://mc.joni.li/map/" target="_blank" class="mb-2 rounded-xl border elevation-2" hover color="surface">
      <client-only>
        <!-- https://imgur.com/a/Ztq2MIv -->
        <v-img src="https://i.imgur.com/1YLB4fK.png" cover max-height="500px" />
      </client-only>
      <v-card-actions class="justify-center py-3 bg-surface border-t">
        <v-btn color="primary" variant="flat" prepend-icon="mdi-map-search-outline" append-icon="mdi-open-in-new">
          Interaktive Karte im Vollbild öffnen
        </v-btn>
      </v-card-actions>
    </v-card>

    <div class="text-caption text-center text-medium-emphasis mt-2">
      Falls die Karte einen <code>502 Bad Gateway</code> anzeigt, ist der MC-Server gerade offline.
    </div>
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
