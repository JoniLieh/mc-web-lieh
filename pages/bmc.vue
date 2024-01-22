<template>
  <div>
    <v-row justify="center" class="my-12">
      <v-col lg="6" md="8" xs="12">
        <v-img src="http://media.forgecdn.net/attachments/488/346/logo.png" alt="BETTER MC">
          <template #placeholder>
            <h1 class="text-h1 text-center">BETTER MC</h1>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12"></v-col>
      <v-col xl="10" xs="12">
        <bmc-media></bmc-media>
      </v-col>
    </v-row>
    
    <p class="text-overline text-error text-center">Modded Minecraft funktioniert zurzeit nur auf der Java-PC-Version</p>
    <br>

    <bmc-features></bmc-features>
    <br>

    <serverAddress></serverAddress>
    <br>

    <bmc-downloads></bmc-downloads>
    <br>
    <bmc-installation></bmc-installation>
    <br>
    <bmc-rules></bmc-rules>
    <br>
    <bmc-guides></bmc-guides>
    <br>
    <bmc-troubleshooting></bmc-troubleshooting>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>