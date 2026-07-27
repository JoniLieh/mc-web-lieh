<template>
  <div>
    <!-- Styled Hero Banner for Vanilla+ RPG Survival -->
    <v-card class="my-6 rounded-xl border elevation-2" color="surface">
      <v-card-item class="pa-6">
        <div class="d-flex align-center flex-wrap ga-2 mb-3">
          <v-chip color="primary" variant="flat" size="small" class="font-weight-bold">
            PaperMC 26.2
          </v-chip>
          <v-chip color="accent" variant="tonal" size="small" class="font-weight-medium">
            Vanilla+ Survival
          </v-chip>
        </div>

        <h1 class="text-h3 text-lg-h2 font-weight-black text-primary">
          Vanilla+ RPG Survival
        </h1>

        <p class="text-subtitle-1 text-medium-emphasis mt-2 mb-0">
          Willkommen! Hier findest du alle wichtigen Infos zu unserem Server, den Skills, Befehlen und Features.
        </p>
      </v-card-item>
    </v-card>

    <!-- Live Server Status Widget -->
    <ServerStatusWidget />

    <!-- Table of Contents Section -->
    <div class="d-flex align-center flex-wrap justify-space-between my-6 ga-4">
      <div class="d-flex align-center">
        <v-icon color="primary" class="mr-3" size="28">mdi-format-list-bulleted-square</v-icon>
        <h2 class="text-h4 font-weight-bold">
          Gliederung
        </h2>
      </div>

      <div style="min-width: 260px; max-width: 360px;" class="flex-grow-1">
        <client-only>
          <v-text-field
            v-model="tocSearch"
            label="Abschnitt suchen..."
            placeholder="Abschnitt eingeben..."
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            density="compact"
            hide-details
            clearable
            color="primary"
            class="rounded-lg"
          ></v-text-field>
        </client-only>
      </div>
    </div>

    <v-row dense class="mb-6">
      <v-col
        v-for="(item, index) in filteredTableOfContent"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          :href="item.link"
          variant="outlined"
          class="rounded-xl border h-100 transition-swing"
          hover
          color="surface"
        >
          <v-card-item class="py-3">
            <template #prepend>
              <v-avatar color="primary" variant="tonal" size="36" class="mr-3">
                <v-icon :icon="item.headingIcon" size="20"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-subtitle-1 font-weight-bold text-primary">
              <client-only>
                <span v-text="item.headingStructure || stripHtml(item.heading)"></span>
              </client-only>
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    
    <!-- Dynamic Component Sections -->
    <section v-for="(item, index) in tableOfContent" :key="index">
      <v-divider class="my-6" />
      
      <KeepAlive>
        <component :is="item.component">
          <h4 :id="item.link.replace('#','')" class="text-h4 d-flex my-4 align-center">
            <v-icon :icon="item.headingIcon" color="primary" class="mr-3"></v-icon>
            <span v-html="item.heading" />
          </h4>
        </component>
      </KeepAlive>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import ServerStatusWidget from '~/components/vanilla/serverStatusWidget.vue'

const { mobile } = useDisplay()
const tocSearch = ref('')

/**
 * Hilfsfunktion zum Entfernen von HTML-Tags für die Gliederungskarten
 */
const stripHtml = (html) => {
  if (!html) return ''
  return html.replace(/<[^>]*>?/gm, '').trim()
}
</script>

<script type="ts">
import QuestionsAndAnswersComponent from '~/components/vanilla/qanda.vue'
import RulesComponent from '~/components/vanilla/rules.vue'
import InstallationComponent from '~/components/vanilla/installation.vue'
import JoinComponent from '~/components/vanilla/join.vue'
import GeneralInfosComponent from '~/components/vanilla/generalInfos.vue'
import MapComponent from '~/components/vanilla/map.vue'
import DownloadComponent from '~/components/vanilla/downloads.vue'
import FeaturesComponent from '~/components/vanilla/features.vue'
import CommandsComponent from '~/components/vanilla/commands.vue'

export default {
  name: 'IndexPage',

  data: () => ({
    tableOfContent: [
      {
        heading: 'Features & Skills',
        headingIcon: 'mdi-star-outline',
        link: '#features',
        component: shallowRef(FeaturesComponent)
      }, {
        headingStructure: 'Interaktive Karte',
        heading: 'Interaktive Karte <i aria-hidden="true" class="v-icon notranslate mdi mdi-open-in-new text-primary" style="font-size: 32px;"></i>',
        headingIcon: 'mdi-map-outline',
        link: '#map',
        component: shallowRef(MapComponent)
      }, {
        heading: 'Befehle',
        headingIcon: 'mdi-console-line',
        link: '#commands',
        component: shallowRef(CommandsComponent)
      }, {
        heading: 'Generelle Infos',
        headingIcon: 'mdi-information-outline',
        link: '#generalinfos',
        component: shallowRef(GeneralInfosComponent)
      }, {
        heading: 'Fragen',
        headingIcon: 'mdi-frequently-asked-questions',
        link: '#qanda',
        component: shallowRef(QuestionsAndAnswersComponent)
      }, {
        heading: 'Regeln',
        headingIcon: 'mdi-exclamation',
        link: '#rules',
        component: shallowRef(RulesComponent)
      }, {
        heading: 'Downloads',
        headingIcon: 'mdi-download',
        link: '#downloads',
        component: shallowRef(DownloadComponent)
      }, {
        heading: 'Installation',
        headingIcon: 'mdi-monitor-arrow-down',
        link: '#installation',
        component: shallowRef(InstallationComponent)
      }, {
        heading: 'Server beitreten',
        headingIcon: 'mdi-play',
        link: '#join',
        component: shallowRef(JoinComponent)
      }
    ]
  }),

  computed: {
    filteredTableOfContent() {
      if (!this.tocSearch) return this.tableOfContent
      const q = this.tocSearch.toLowerCase().trim()
      return this.tableOfContent.filter(item => {
        const title = (item.headingStructure || item.heading || '').toLowerCase()
        return title.includes(q)
      })
    }
  }
}
</script>
