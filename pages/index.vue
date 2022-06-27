<template>
  <div>
    <h1 :class="{'display-4': !$vuetify.breakpoint.xs, 'display-3': $vuetify.breakpoint.xs, 'my-12': true}">
      Willkommen
    </h1>
    <h2 :class="{'display-3': !$vuetify.breakpoint.xs, 'display-2': $vuetify.breakpoint.xs}">
      Gliederung
    </h2>
    <v-divider class="my-4" />
    <section>
      <v-list color="transparent">
        <v-list-item
          v-for="(item, index) in tableOfContent"
          :key="index"
          :href="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ item.headingIcon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title>
            <client-only>
              <a :href="item.link" v-text="item.heading"></a>
            </client-only>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </section>
    <section v-for="(item, index) in tableOfContent" :key="index">
      <v-divider class="my-4" />
      <component :is="item.component">
        <h4 :id="item.link.replace('#','')" class="display-1 d-flex my-4">
          {{ item.heading }}
          <v-spacer />
          <v-spacer />
          <v-icon x-large>
            {{ item.headingIcon }}
          </v-icon>
        </h4>
      </component>
    </section>
  </div>
</template>

<script type="ts">
import QuestionsAndAnswersComponent from '~/components/qanda.vue'
import RulesComponent from '~/components/rules.vue'
import InstallationComponent from '~/components/installation.vue'
import JoinComponent from '~/components/join.vue'
import GeneralInfosComponent from '~/components/generalInfos.vue'
import ExtraComponent from '~/components/extras.vue'
export default {
  name: 'IndexPage',

  components: {
    QuestionsAndAnswersComponent,
    InstallationComponent,
    RulesComponent,
    JoinComponent,
    GeneralInfosComponent,
    ExtraComponent
  },

  data: () => ({
    tableOfContent: [
      {
        heading: 'Generelle Infos',
        headingIcon: 'mdi-information-outline',
        link: '#generalinfos',
        component: GeneralInfosComponent
      }, {
        heading: 'Fragen',
        headingIcon: 'mdi-frequently-asked-questions',
        link: '#qanda',
        component: QuestionsAndAnswersComponent
      }, {
        heading: 'Regeln',
        headingIcon: 'mdi-exclamation',
        link: '#rules',
        component: RulesComponent
      }, {
        heading: 'Installation',
        headingIcon: 'mdi-download',
        link: '#installation',
        component: InstallationComponent
      }, {
        heading: 'Server beitreten',
        headingIcon: 'mdi-play',
        link: '#join',
        component: JoinComponent
      }, {
        heading: 'Extras',
        headingIcon: 'mdi-one-up',
        link: '#extras',
        component: ExtraComponent
      }
    ]
  })
}
</script>
