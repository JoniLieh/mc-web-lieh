<template>
  <v-fade-transition>
    <v-fab
      @click="goTo(0)"
      v-show="model"
      v-scroll="onScroll"
      location="bottom end"
      elevation="8"
      icon="mdi-chevron-up"
      size="large"
      fixed
      app
      appear
    >
    </v-fab>
  </v-fade-transition>
</template>

<script setup>
// https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/components/app/BackToTop.vue
// Composables
import { useGoTo } from "vuetify";

// Utilities
import { shallowRef } from "vue";

const goTo = useGoTo({ layout: true });

const model = shallowRef(false);

function onScroll() {
  model.value = window.scrollY > 200;
}
</script>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}

.pointer-events-initial {
  pointer-events: initial;
}
</style>
