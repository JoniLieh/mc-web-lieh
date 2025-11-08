<template>
  <div>
    <slot />
    <v-list bg-color="transparent" density="comfortable">
      <v-list-item v-for="(download, ruleIndex) in downloads" :key="ruleIndex" class="success--text text--darken-1" :href="download.link" target="_blank" link>
        <template v-slot:prepend>
          <v-icon color="primary" start>
            mdi-file
          </v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">
          {{ download.name }}<v-icon color="primary" size="small" end>mdi-open-in-new</v-icon>
        </v-list-item-title>
      </v-list-item>
    </v-list>
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
