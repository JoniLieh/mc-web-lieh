<template>
  <div class="h-100 d-flex flex-column justify-center align-center">
    <v-empty-state
      image="/images/logo.svg"
      :headline="'Hoppla, ' + statusCode"
      title="Etwas ist schief gelaufen."
      :text="constants.ParseError(message) || message"
    >
      <v-btn v-if="statusCode == 401" prepend-icon="mdi-login" to="/login" color="primary" variant="outlined" nuxt>Zur Anmeldung</v-btn>
      <v-btn v-else prepend-icon="mdi-home" to="/" color="primary" variant="outlined" nuxt>Zur Startseite</v-btn>
    
    </v-empty-state>
  </div>
</template>

<script setup>
const error = useError();

const { statusCode, message } = error.value;
</script>

<style scoped>
img {
  padding: 16px;
}
</style>