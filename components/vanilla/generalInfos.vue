<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <slot />

    <client-only>
      <v-expansion-panels v-model="panel" multiple variant="inset">
        <v-expansion-panel v-for="(item, i) in infos" :key="i">
          <v-expansion-panel-title class="text-h6 primary-text" collapse-icon="mdi-server" expand-icon="mdi-server"
            disable-icon-rotate>
            <span :class="item.isError ? 'text-error' : ''">
              {{ item.heading }}
            </span>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-alert v-if="!item.list" color="success" icon="mdi-web" border="start" variant="tonal" >
              <div v-html="item.answer" />
            </v-alert>

            <v-list v-else density="compact">
              <v-list-item v-for="(listItem, itemIndex) in item.list" :key="itemIndex + 1 * 100">
                <template v-slot:prepend>
                  <div class="text-right">
                    <v-icon v-if="item.isUl" start>mdi-circle-small</v-icon>
                    <span v-else class="mr-5">
                      {{ itemIndex + 1 }}.
                    </span>
                  </div>
                </template>
                <v-list-item-title class="d-block" v-html="listItem"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </client-only>
  </div>
</template>

<script setup>
const panel = ref([0, 1, 2, 3, 4])
</script>

<script type="ts">
export default {
  name: 'GeneralInfosComponent',

  data() {
    return {
      infos: [
        // {
        //   heading: 'Stand 06.09.2024',
        //   list: [
        //     'Vanilla Server',
        //   ],
        //   isError: true,
        //   isUl: true
        // },
        {
          heading: 'Server-Adresse',
          answer: 'jonilieh.de'
        },
        {
          heading: 'Besonderes',
          list: [
            'Skills, Leveling und Super Fähigkeiten!',
            // 'Es gibt eine Kreativ-Welt, wo ihr euch austoben könnt :)',
            'Für Whitelist, bitte mich anschreiben!',
            'Interaktive Live Karte'
          ]
        },
        {
          heading: 'Plugins',
          list: [
            'AuraSkills',
            'ViaVersion',
            'EssentialsX',
            'GeyserMC',
            'Graves',
            'GSit'
            // 'McMMO',
            // 'Multiverse',
            // 'WorldEdit',
            // 'WorldGuard',
          ]
        }, {
          heading: 'Nützliches',
          list: [
            '<a href="https://minecraft.fandom.com/de/wiki/Minecraft_Wiki" target="_blank">Minecraft Wiki</a>',
            '<a href="https://minecraft.tools/de" target="_blank">Minecraft Tools - Nützliche MC Werkzeuge</a>',
            // '<a href="https://mcmmo.fandom.com/wiki/Befehle_in_deutscher_Sprache" target="_blank">McMMO Chat Befehle</a>',
            '<a href="https://wiki.aurelium.dev/auraskills" target="_blank">AuraSkills</a>',
          ],
          isUl: true
        }
      ]
    }
  }
}
</script>
