<template>
  <v-alert title="Regeln" icon="mdi-alert" type="error" border="start" variant="tonal">
    <ul>
      <li>Gleiche Regeln wie bei <nuxt-link to="/#rules">Vanilla</nuxt-link></li>
      <li>Der Server hat eine Anzahl an Chunks vorgeneriert, wenn ihr also merkt, dass neue Chunks generiert werden, haltet euch ein wenig zurück für die anderen Spieler :) (es laggt für alle)
        <br>
        <small class="caption">(Server hat leider nur begrenzten RAM)</small>
      </li>
      <li>Haltet euch nicht in ungeladenen Chunks auf, wartet in einem geladenen Chunk und lasst den Server rendern</li>
    </ul>
  </v-alert>
</template>

<script lang="ts" setup>

</script>

<style></style>