<template>
  <v-app>
    <v-main>
      <v-container class="h-100">
        <div v-if="error.statusCode === 404">
          <v-row align-content="center" justify="center">
            <v-col md="5" xs="8">
              <v-card class="pa-6" outlined>
                <v-img src="/404.svg" />

                <v-card-text class="text-center">
                  <v-alert type="error" variant="tonal">
                    Pfad konnte nicht gefunden werden.
                  </v-alert>
                  <v-btn color="primary" to="/" large block>
                    <v-icon start>
                      mdi-home
                    </v-icon>
                    Startseite
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <h1 v-else>
          <v-alert type="error" variant="tonal">
            {{ otherError }}
          </v-alert>
        </h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'Ein Fehler ist aufgetreten'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
