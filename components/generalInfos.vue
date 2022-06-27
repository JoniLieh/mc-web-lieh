<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <slot />
    <v-expansion-panels multiple flat :value=[0,1,2,3,4]>
      <v-expansion-panel
        v-for="(item,i) in infos"
        :key="i"
      >
        <v-expansion-panel-header class="title primary--text" expand-icon="mdi-server" disable-icon-rotate>
          {{ item.heading }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            v-if="!item.list"
            color="success"
            border="left"
            text
          >
            <div v-html="item.answer" />
          </v-alert>

          <v-list v-else dense>
            <v-list-item v-for="(listItem, itemIndex) in item.list" :key="itemIndex+1*100">
              <v-list-item-icon class="text-right">
                {{ itemIndex+1 }}
              </v-list-item-icon>
              <v-list-item-content class="d-block" v-html="listItem"></v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script type="ts">
export default {
  name: 'GeneralInfosComponent',

  data () {
    return {
      infos: [
        {
          heading: 'Server-Adresse',
          answer: 'jonilieh.de'
        }, {
          heading: 'Besonderes',
          list: [
            'Skills, Leveling und Super Powers!',
            'Es gibt eine Kreativ-Welt, wo ihr euch austoben könnt :)',
            'Für Whitelist, bitte mich anschreiben!'
          ]
        }, {
          heading: 'Plugins',
          list: [
            'mcMMO',
            'Multiverse',
            'WorldEdit',
            'WorldGuard',
          ]
        }
      ]
    }
  }
}
</script>
