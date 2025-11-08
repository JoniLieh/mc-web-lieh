<template>
  <div>
    <h1 class="my-6 text-h2 text-lg-h1">
      Willkommen
    </h1>
    <h2 class="my-6 text-h3 text-lg-h2">
      Gliederung
    </h2>

    <v-divider class="my-4" />
    <section>
      <v-list bg-color="transparent">
        <v-list-item
          v-for="(item, index) in tableOfContent"
          :key="index"
          :href="item.link"
          :prepend-avatar="item.headingIcon"
          link
        >
          <template v-slot:prepend>
            <v-icon :icon="item.headingIcon" color="primary"></v-icon>
          </template>

          <v-list-item-title>
            <client-only>
              <a :href="item.link" v-text="item.headingStructure || item.heading" class="text-primary"></a>
            </client-only>
          </v-list-item-title> 
        </v-list-item>
      </v-list>
    </section>
    
    <section v-for="(item, index) in tableOfContent" :key="index">
      <v-divider class="my-4" />
      
      <KeepAlive>
        <component :is="item.component">
          <h4 :id="item.link.replace('#','')" class="text-h4 d-flex my-4">
            <span v-html="item.heading" />
            <v-spacer />
            <v-spacer />
            <v-icon :icon="item.headingIcon"></v-icon>
          </h4>
        </component>
      </KeepAlive>
    </section>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify/lib/framework.mjs'

const { mobile } = useDisplay()
</script>

<script type="ts">
import QuestionsAndAnswersComponent from '~/components/vanilla/qanda.vue'
import RulesComponent from '~/components/vanilla/rules.vue'
import InstallationComponent from '~/components/vanilla/installation.vue'
import JoinComponent from '~/components/vanilla/join.vue'
import GeneralInfosComponent from '~/components/vanilla/generalInfos.vue'
import ExtraComponent from '~/components/vanilla/extras.vue'
import MapComponent from '~/components/vanilla/map.vue'
import DownloadComponent from '~/components/vanilla/downloads.vue'


export default {
  name: 'IndexPage',

  data: () => ({
    tableOfContent: [
      {
        heading: 'Generelle Infos',
        headingIcon: 'mdi-information-outline',
        link: '#generalinfos',
        component: shallowRef(GeneralInfosComponent)
      }, {
        headingStructure: 'Interaktive Karte',
        heading: 'Interaktive Karte <i aria-hidden="true" class="v-icon notranslate mdi mdi-open-in-new text-primary" style="font-size: 32px;"></i>',
        headingIcon: 'mdi-map-outline',
        link: '#map',
        component: shallowRef(MapComponent)
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
      }, {
        heading: 'Extras',
        headingIcon: 'mdi-one-up',
        link: '#extras',
        component: shallowRef(ExtraComponent)
      }
    ]
  })
}
</script>
