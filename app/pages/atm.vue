<template>
  <div>
    <v-row justify="center" class="mb-12">
      <!-- <v-col lg="6" md="8" xs="12">
        <v-img src="https://i.imgur.com/QAUei6a_d.webp?maxwidth=760&fidelity=grand" alt="ATM10">
          <template #placeholder>
            <h1 class="text-h1 text-sm-h3 text-center">ATM10</h1>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12"></v-col> -->
      <v-col xl="10" xs="12">
        <atm-media></atm-media>
      </v-col>
    </v-row>
    
    <p class="text-overline text-error text-center">Modded Minecraft funktioniert zurzeit nur auf der Java-PC-Version</p>
    <br>
    
    <atm-features></atm-features>
    <br>

    <v-alert icon="mdi-flash-alert" border="start" variant="tonal" color="deep-orange">
      Aufgrund von dynamischer Sichtweite des Servers werden Mods wie <b>Distant Horizons</b> oder ähnliche dringend empfohlen.
      <br>
      <a href="https://i.imgur.com/ye7frtj.png" target="_blank">Hilfe Bild</a>
    </v-alert>
    <br>

    <serverAddress></serverAddress>
    <br>

    <atm-downloads></atm-downloads>
    <br>
    <atm-installation></atm-installation>
    <br>
    <bmc-rules></bmc-rules>
    <br>
    <atm-guides></atm-guides>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>