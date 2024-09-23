<template>
  <v-app>
    <AppHeader />

    <back-to-top></back-to-top>

    <v-main>
      <v-container :class="{ 'main-container': true, 'pa-6': !mobile }" class="d-flex h-100" dark>
        <div class="ma-auto w-100">
          <span v-intersect="onIntersect" />
          <slot />
        </div>
      </v-container>

      
    </v-main>
    
    <!-- <AppBottomNav /> -->
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { useGoTo } from 'vuetify'

const { mobile } = useDisplay()
const goTo = useGoTo();

onMounted(async () => {
  await nextTick();
  if (useRoute().hash)
    goTo(useRoute().hash)
});
</script>

<script lang="ts">
export default {
  name: 'DefaultLayout',
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0
      },
      showFab: false
    }
  },
  mounted() {
    this.windowSize = {
      x: window.innerWidth,
      y: window.innerHeight
    }
  },

  methods: {
    onIntersect(intersected: boolean) {
      this.showFab = !intersected
    }
  }
}
</script>

<style scoped>
#back-to-top-btn {
  bottom: 0 !important;
}
</style>

<style lang="scss">
.v-main {
  background-image: linear-gradient(0deg, rgba(84, 217, 215, .47843) 5%, rgb(255 255 255) 50%, rgb(255 196 193) 95%);
}

.main-container {
  background-color: #ffffff85;
}

.v-theme--dark .main-container {
  background-color: #1e1e1ede;
}

::v-deep .v-parallax__content {
  color: auto;
}
</style>
