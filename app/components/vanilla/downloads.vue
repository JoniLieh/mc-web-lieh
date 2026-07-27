<template>
  <div>
    <slot />
    <v-row dense class="mt-2">
      <v-col v-for="(download, index) in downloads" :key="index" cols="12" sm="4">
        <v-card
          :href="download.link"
          target="_blank"
          variant="outlined"
          class="rounded-xl border h-100"
          hover
          color="surface"
        >
          <v-card-item class="py-3">
            <template #prepend>
              <v-avatar color="primary" variant="tonal" size="36" class="mr-3">
                <v-icon color="primary" size="20">mdi-download</v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-subtitle-1 font-weight-bold text-primary d-flex align-center">
              {{ download.name }}
              <v-icon color="primary" size="x-small" class="ml-2">mdi-open-in-new</v-icon>
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>

const downloads = [
  {
    name: 'PrismLauncher',
    link: 'https://prismlauncher.org/download/'
  },
  {
    name: 'Minecraft-Instanzen',
    link: 'https://www.dropbox.com/scl/fo/me0c00s1k7m53hbvm1yje/h?rlkey=4nhi8ybtofrv3qjr6noycpfjo&dl=0'
  },
  {
    name: 'Java JDK',
    link: 'https://www.oracle.com/de/java/technologies/downloads/'
  },

]

</script>

<style></style>
