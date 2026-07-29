<template>
  <div>
    <slot />

    <v-card variant="outlined" class="rounded-xl mt-2 border" color="surface">
      <v-card-item class="pb-2">
        <template #prepend>
          <v-avatar color="accent" variant="tonal" class="mr-3" size="44">
            <v-icon icon="mdi-rocket-launch-outline" size="22" color="accent"></v-icon>
          </v-avatar>
        </template>

        <template #title>
          <span class="text-h6 font-weight-bold text-accent">
            PrismLauncher Schnellstart
          </span>
        </template>
        <template #subtitle>
          <span class="text-subtitle-1 font-weight-medium text-medium-emphasis">
            Fertiges Minecraft-Pack in unter 2 Minuten einrichten
          </span>
        </template>
        <template #append>
          <v-btn
            color="accent"
            variant="flat"
            size="small"
            prepend-icon="mdi-content-copy"
            class="font-weight-bold"
            @click="copyDirectUrl"
          >
            Direkt-URL kopieren
          </v-btn>
        </template>
      </v-card-item>

      <v-divider></v-divider>

      <v-card-text class="pa-4">
        <!-- Direct URL Callout Box -->
        <v-card variant="tonal" color="accent" class="pa-3 rounded-lg border mb-4">
          <div class="text-subtitle-2 font-weight-bold mb-1">
            <v-icon size="small" class="mr-1" color="accent">mdi-link-variant</v-icon>
            Direkt-Download URL für PrismLauncher Import:
          </div>
          <div class="d-flex align-center flex-wrap ga-2">
            <code class="text-caption font-weight-bold px-2 py-1 rounded bg-surface flex-grow-1 text-truncate" style="user-select: all;">
              {{ directDownloadUrl }}
            </code>
            <v-btn
              color="accent"
              variant="flat"
              size="x-small"
              prepend-icon="mdi-content-copy"
              @click="copyDirectUrl"
            >
              URL kopieren
            </v-btn>
          </div>
        </v-card>

        <v-timeline density="compact" align="start">
          <v-timeline-item
            v-for="(step, index) in quickstartSteps"
            :key="index"
            dot-color="accent"
            size="x-small"
          >
            <div class="mb-1">
              <span class="text-subtitle-1 font-weight-bold text-accent">{{ step.title }}</span>
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="text-body-2 text-medium-emphasis" v-html="step.description"></div>
          </v-timeline-item>
        </v-timeline>

        <v-alert
          type="info"
          variant="tonal"
          class="mt-4 rounded-xl text-body-2"
          density="comfortable"
          icon="mdi-information-outline"
        >
          Weitere Infos für Konsole, Mobilgeräte oder manuelle Client-Einrichtung findest du im Abschnitt <a href="#installation" class="font-weight-bold text-primary">Installation</a>.
        </v-alert>
      </v-card-text>
    </v-card>

    <!-- Copy Toast Snackbar -->
    <v-snackbar v-model="showSnackbar" timeout="1800" color="success">
      <v-icon icon="mdi-check-circle" class="mr-2"></v-icon>
      Direkt-URL für PrismLauncher in Zwischenablage kopiert!
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()
const showSnackbar = ref(false)

const directDownloadUrl = 'https://www.dropbox.com/scl/fi/57eg7xp02acifv6ilybuw/26.2_2026.zip?rlkey=dqvg1xuii5vi3dtq9dyoe0cgl&st=yke5o5l9&dl=1'

const copyDirectUrl = () => {
  copy(directDownloadUrl)
  showSnackbar.value = true
}

const quickstartSteps = [
  {
    title: '1. PrismLauncher installieren & Account verknüpfen',
    description: 'Lade dir den <a href="https://prismlauncher.org/download/" target="_blank">PrismLauncher</a> herunter. Verknüpfe oben rechts dein Microsoft-Konto, auf dem Minecraft registriert ist (und stelle sicher, dass <a href="https://www.oracle.com/de/java/technologies/downloads/" target="_blank">Java JDK</a> installiert ist).'
  },
  {
    title: '2. Direkt-URL kopieren (oder .zip herunterladen)',
    description: 'Klicke oben auf <b>"Direkt-URL kopieren"</b>. Alternativ kannst du die <a href="' + directDownloadUrl + '" target="_blank">26.2_2026.zip Instanz-Datei herunterladen</a>.'
  },
  {
    title: '3. Instanz importieren & Starten',
    description: 'Starte PrismLauncher &rarr; oben links <code>"Instanz hinzufügen"</code> &rarr; <code>"Importieren"</code>. Füge die kopierte Direkt-URL in das Feld ein (oder wähle die heruntergeladene <code>26.2_2026.zip</code> über <i>"Durchsuchen"</i> aus) (<a href="https://i.imgur.com/YTCyrMp.png" target="_blank" class="font-weight-bold text-accent">Hilfe-Bild</a>) und starte die neue Instanz. Der Server <code>joni.li</code> ist bereits vorkonfiguriert!'
  }
]
</script>

<script type="ts">
export default {
  name: 'QuickstartComponent'
}
</script>

<style scoped>
</style>
