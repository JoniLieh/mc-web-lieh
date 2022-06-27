<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title> JoniLieh-MC-Server </v-toolbar-title>
      <v-spacer />
      <v-img
        src="/favicon.ico"
        class="round-borders"
        contain
        height="auto"
        max-height="48px"
        max-width="48px"
      />
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container :class="{'main-container': true, 'pa-6': !$vuetify.breakpoint.xs }">
        <span v-intersect="onIntersect" />
        <Nuxt />
      </v-container>
      <v-fab-transition>
        <v-btn
          v-show="showFab"
          fixed
          bottom
          right
          fab
          color="primary"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false,
      windowSize: {
        x: 0,
        y: 0
      },
      showFab: false
    }
  },
  mounted () {
    this.windowSize = {
      x: window.innerWidth,
      y: window.innerHeight
    }
    this.$vuetify.theme.dark = window.matchMedia('(prefers-color-scheme: dark)').matches
  },

  methods: {
    onIntersect (entries) {
      this.showFab = !entries[0].isIntersecting
    }
  }
}
</script>

<style lang="scss">
.v-main {
  background-image: linear-gradient(0deg, #54d9d77a 5%, #ffffff 50%, #ffc4c1 95%);
}

.main-container {
  background-color: #ffffff85;
}

.theme--dark .main-container {
  background-color: #1e1e1ede;
}

::v-deep .v-parallax__content {
  color: auto;
}
</style>
