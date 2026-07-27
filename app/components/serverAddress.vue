<template>
  <v-alert title="Server-Adresse" icon="mdi-web" type="success" border="start" variant="tonal">
    <div class="d-flex flex-wrap align-center ga-3 mt-1">
      <span class="text-primary font-weight-bold text-subtitle-1">
        joni.li
      </span>
      <v-spacer></v-spacer>
      <v-btn
        size="small"
        color="primary"
        variant="flat"
        prepend-icon="mdi-content-copy"
        @click="copy('joni.li')"
      >
        IP kopieren
      </v-btn>
    </div>
  </v-alert>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
const { copy } = useClipboard()
</script>

<style></style>