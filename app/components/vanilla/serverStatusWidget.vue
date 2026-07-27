<template>
  <v-card class="elevation-3 rounded-xl border mb-6 overflow-hidden" color="surface">
    <!-- Server Status Top Bar -->
    <v-card-item class="py-4">
      <template #prepend>
        <v-avatar color="primary" variant="flat" class="mr-3" size="44">
          <v-icon color="on-primary" size="24">mdi-server</v-icon>
        </v-avatar>
      </template>

      <v-card-title class="text-h5 font-weight-bold d-flex align-center flex-wrap ga-2">
        Live Server Status
        <v-chip
          :color="isOnline ? 'success' : 'error'"
          size="small"
          class="font-weight-bold"
          variant="flat"
        >
          <v-icon start size="x-small">
            {{ isOnline ? 'mdi-circle' : 'mdi-circle-outline' }}
          </v-icon>
          {{ isOnline ? 'Online' : 'Offline' }}
        </v-chip>
      </v-card-title>

      <v-card-subtitle class="text-body-2 text-medium-emphasis">
        Live-Daten direkt vom Minecraft-Server
      </v-card-subtitle>

      <template #append>
        <v-btn
          icon="mdi-refresh"
          variant="tonal"
          color="primary"
          size="small"
          :loading="loading"
          @click="fetchServerStatus"
        ></v-btn>
      </template>
    </v-card-item>

    <v-divider></v-divider>

    <v-card-text class="pa-4">
      <!-- 3 Columns Stat Grid -->
      <v-row dense>
        <!-- Stat 1: Players Online -->
        <v-col cols="12" sm="4">
          <v-card variant="tonal" color="primary" class="pa-3 rounded-lg h-100 border">
            <div class="d-flex align-center justify-space-between mb-1">
              <span class="text-caption font-weight-bold text-uppercase">Spieler Online</span>
              <v-icon size="small">mdi-account-group</v-icon>
            </div>
            <div class="text-h4 font-weight-black">
              {{ onlinePlayers }} <span class="text-body-2 font-weight-regular text-medium-emphasis">/ {{ maxPlayers }}</span>
            </div>
            <v-progress-linear
              :model-value="(onlinePlayers / (maxPlayers || 1)) * 100"
              color="primary"
              height="4"
              rounded
              class="mt-2"
            ></v-progress-linear>
          </v-card>
        </v-col>

        <!-- Stat 2: Version & Platform -->
        <v-col cols="12" sm="4">
          <v-card variant="tonal" color="info" class="pa-3 rounded-lg h-100 border">
            <div class="d-flex align-center justify-space-between mb-1">
              <span class="text-caption font-weight-bold text-uppercase">Server Version</span>
              <v-icon size="small">mdi-cube-outline</v-icon>
            </div>
            <div class="text-subtitle-1 font-weight-bold text-truncate">
              {{ serverVersion }}
            </div>
            <div class="text-caption text-medium-emphasis mt-1">
              Java & Bedrock Crossplay
            </div>
          </v-card>
        </v-col>

        <!-- Stat 3: Server IP Copy Box -->
        <v-col cols="12" sm="4">
          <v-card variant="tonal" color="success" class="pa-3 rounded-lg h-100 border d-flex flex-column justify-space-between">
            <div class="d-flex align-center justify-space-between mb-1">
              <span class="text-caption font-weight-bold text-uppercase">Server IP</span>
              <v-icon size="small">mdi-link-variant</v-icon>
            </div>
            <div class="d-flex align-center justify-space-between mt-1">
              <code class="text-h6 font-weight-black px-2 py-1 rounded bg-surface">joni.li</code>
              <v-btn
                color="success"
                variant="flat"
                size="small"
                prepend-icon="mdi-content-copy"
                class="font-weight-bold"
                @click="copyIp('joni.li')"
              >
                Kopieren
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- MOTD Banner with clickable link support -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-alert
        v-if="formattedMotdHtml"
        variant="tonal"
        color="primary"
        density="compact"
        icon="mdi-bullhorn-outline"
        class="mt-3 rounded-lg border text-body-2"
      >
        <strong>MOTD:</strong> <span v-html="formattedMotdHtml"></span>
      </v-alert>

      <!-- Active Players list if online -->
      <v-expand-transition>
        <div v-if="playerList && playerList.length > 0" class="mt-4 pt-3 border-t">
          <div class="text-caption font-weight-bold mb-2 text-medium-emphasis">
            Gerade online ({{ playerList.length }}):
          </div>
          <div class="d-flex flex-wrap ga-2">
            <v-chip
              v-for="(player, idx) in playerList"
              :key="idx"
              size="small"
              variant="outlined"
              color="primary"
            >
              <template #prepend>
                <v-avatar start size="18">
                  <v-img :src="'https://mc-heads.net/avatar/' + (player.name || player) + '/24'" />
                </v-avatar>
              </template>
              {{ player.name || player }}
            </v-chip>
          </div>
        </div>
      </v-expand-transition>
    </v-card-text>

    <!-- Copy notification Snackbar -->
    <v-snackbar v-model="showSnackbar" timeout="2000" color="success">
      <v-icon class="mr-2">mdi-check-circle</v-icon>
      IP "joni.li" in Zwischenablage kopiert!
    </v-snackbar>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()

const isOnline = ref(true)
const onlinePlayers = ref(0)
const maxPlayers = ref(69)
const serverVersion = ref('PaperMC 26.2 (26.2+)')
const motd = ref('')
const playerList = ref([])
const loading = ref(false)

const showSnackbar = ref(false)

/**
 * Formatiert die Server MOTD sauber mit anklickbaren Links
 */
const formattedMotdHtml = computed(() => {
  if (!motd.value) return 'Willkommen auf dem Vanilla+ RPG Survival Server!'
  return motd.value.replace(
    /(https?:\/\/\S+)/gi,
    '<a href="$1" target="_blank" class="font-weight-bold text-decoration-underline text-primary">$1</a>'
  )
})

/**
 * Holen der Live Server-Daten von der mcsrvstat.us API für joni.li
 */
const fetchServerStatus = async () => {
  loading.value = true
  try {
    const response = await fetch('https://api.mcsrvstat.us/3/joni.li')
    const data = await response.json()

    if (data) {
      isOnline.value = !!data.online
      if (data.players) {
        onlinePlayers.value = data.players.online ?? 0
        maxPlayers.value = data.players.max ?? 69
        playerList.value = data.players.list || []
      }
      if (data.version) {
        serverVersion.value = 'PaperMC ' + data.version + ' (26.2+)'
      }
      if (data.motd && data.motd.clean && data.motd.clean.length > 0) {
        motd.value = data.motd.clean.join(' ')
      }
    }
  } catch (err) {
    console.error('Fehler beim Abrufen des Server-Status:', err)
  } finally {
    loading.value = false
  }
}

/**
 * IP in die Zwischenablage kopieren und Toast anzeigen
 */
const copyIp = (ipText) => {
  copy(ipText)
  showSnackbar.value = true
}

onMounted(() => {
  fetchServerStatus()
})
</script>

<script type="ts">
export default {
  name: 'ServerStatusWidget'
}
</script>
