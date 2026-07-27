<template>
  <div>
    <slot />

    <v-card variant="outlined" class="rounded-xl mt-2 border" color="surface">
      <!-- Search & Category Filter Toolbar -->
      <v-card-text class="pa-4">
        <v-row dense class="align-center">
          <v-col cols="12" sm="6">
            <client-only>
              <v-text-field
                v-model="searchQuery"
                label="Befehl suchen..."
                placeholder="Befehl oder Funktion eingeben..."
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="compact"
                hide-details
                clearable
                color="primary"
                class="rounded-lg"
              ></v-text-field>
            </client-only>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="d-flex flex-wrap ga-1 justify-sm-end">
              <v-chip
                v-for="cat in categories"
                :key="cat"
                size="small"
                color="primary"
                :variant="selectedCategory === cat ? 'flat' : 'tonal'"
                class="font-weight-medium"
                @click="selectedCategory = cat"
              >
                {{ cat }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Commands Table -->
      <v-table v-if="filteredCommands.length > 0" hover density="comfortable">
        <thead>
          <tr>
            <th class="text-left font-weight-bold">Befehl</th>
            <th class="text-left font-weight-bold">Kategorie</th>
            <th class="text-left font-weight-bold">Beschreibung</th>
            <th class="text-right font-weight-bold">Kopieren</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cmd, index) in filteredCommands" :key="index">
            <td>
              <code class="text-primary font-weight-bold px-2 py-1 rounded">
                {{ cmd.name }}
              </code>
            </td>
            <td>
              <v-chip size="x-small" variant="tonal" color="secondary">
                {{ cmd.category }}
              </v-chip>
            </td>
            <td class="text-body-2">
              {{ cmd.description }}
            </td>
            <td class="text-right">
              <v-btn
                icon="mdi-content-copy"
                size="x-small"
                variant="text"
                color="primary"
                @click="copyCommand(cmd.name)"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>

      <!-- Empty Search State -->
      <div v-else class="pa-6 text-center text-medium-emphasis">
        <v-icon size="40" color="medium-emphasis" class="mb-2">mdi-text-search-variant</v-icon>
        <div class="text-body-1 font-weight-medium">Keine Befehle für "{{ searchQuery }}" gefunden.</div>
      </div>
    </v-card>

    <!-- Copy Toast Snackbar -->
    <v-snackbar v-model="showSnackbar" timeout="1800" color="success">
      <v-icon icon="mdi-check-circle" class="mr-2"></v-icon>
      Befehl "{{ copiedText }}" in Zwischenablage kopiert!
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()
const showSnackbar = ref(false)
const copiedText = ref('')
const searchQuery = ref('')
const selectedCategory = ref('Alle')

const categories = ['Alle', 'Teleportation', 'RPG Skills', 'Animationen']

const commandList = ref([
  {
    name: '/sethome [name]',
    category: 'Teleportation',
    description: 'Setzt ein Zuhause an deiner aktuellen Position (bis zu 3 Homes erlaubt).'
  },
  {
    name: '/home [name]',
    category: 'Teleportation',
    description: 'Teleportiert dich zu deinem gespeicherten Zuhause.'
  },
  {
    name: '/tpa <spieler>',
    category: 'Teleportation',
    description: 'Sendet eine Teleport-Anfrage an einen anderen Spieler.'
  },
  {
    name: '/tpaccept',
    category: 'Teleportation',
    description: 'Nimmt eine eingehende Teleport-Anfrage an.'
  },
  {
    name: '/rtp (oder /wild)',
    category: 'Teleportation',
    description: 'Teleportiert dich zufällig in die freie Wildbahn.'
  },
  {
    name: '/spawn',
    category: 'Teleportation',
    description: 'Bringt dich direkt zurück zum Server-Spawn.'
  },
  {
    name: '/warp [name]',
    category: 'Teleportation',
    description: 'Teleportiert dich zu öffentlichen Community-Warps.'
  },
  {
    name: '/skills',
    category: 'RPG Skills',
    description: 'Öffnet das RPG Skills- & Menü zur Übersicht deiner Attribute.'
  },
  {
    name: '/sit, /lay, /crawl',
    category: 'Animationen',
    description: 'Führt Charakter-Animationen aus (Hinsetzen, Hinlegen, Krabbeln).'
  }
])

/**
 * Befehle nach Suchbegriff und Kategorie filtern
 */
const filteredCommands = computed(() => {
  return commandList.value.filter(cmd => {
    const matchesCategory = selectedCategory.value === 'Alle' || cmd.category === selectedCategory.value
    const q = (searchQuery.value || '').toLowerCase().trim()
    const matchesSearch = !q || cmd.name.toLowerCase().includes(q) || cmd.description.toLowerCase().includes(q) || cmd.category.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })
})

/**
 * Befehl in die Zwischenablage kopieren
 */
const copyCommand = (cmdText) => {
  const cleanCmd = cmdText.split(' ')[0].replace(',', '')
  copy(cleanCmd)
  copiedText.value = cleanCmd
  showSnackbar.value = true
}
</script>

<script type="ts">
export default {
  name: 'CommandsComponent'
}
</script>
