<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <slot />

    <client-only>
      <v-expansion-panels v-model="panel" multiple variant="inset">
        <v-expansion-panel v-for="(item, i) in infos" :key="i" class="rounded-xl border mb-2">
          <v-expansion-panel-title class="text-h6 font-weight-bold" collapse-icon="mdi-server" expand-icon="mdi-server"
            disable-icon-rotate>
            <span :class="item.isError ? 'text-error' : 'text-primary'">
              {{ item.heading }}
            </span>
          </v-expansion-panel-title>
          
          <v-expansion-panel-text>
            <v-alert v-if="!item.list" color="success" icon="mdi-web" border="start" variant="tonal" class="rounded-lg">
              <div v-html="item.answer" />
            </v-alert>

            <!-- Pixel-perfect aligned list grid -->
            <div v-else class="aligned-list py-1">
              <div 
                v-for="(listItem, itemIndex) in item.list" 
                :key="itemIndex"
                class="d-flex align-baseline py-2 border-b-subtle"
              >
                <div v-if="item.isUl" class="text-right mr-3" style="width: 32px; min-width: 32px;">
                  <v-icon color="primary" size="small">mdi-link-variant</v-icon>
                </div>
                <div 
                  v-else 
                  class="text-right font-weight-bold text-medium-emphasis mr-3 text-body-1" 
                  style="width: 32px; min-width: 32px;"
                >
                  {{ itemIndex + 1 }}.
                </div>
                <div class="flex-grow-1 text-body-1" v-html="listItem"></div>
              </div>
            </div>
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
          heading: 'Server-Informationen',
          list: [
            '<b>Server-Name:</b> Vanilla+ RPG Survival',
            '<b>Server-Adresse:</b> <code>joni.li</code>',
            '<b>Minecraft-Version:</b> PaperMC 26.2 (26.2+)'
          ]
        },
        {
          heading: 'Wartung & Neustarts',
          list: [
            '<b>Neustarts & Backups:</b> Alle 6 Stunden (00:00, 06:00, 12:00 & 18:00 Uhr)',
            '<b>Warnung:</b> 60 Sekunden Vorwarnung ingame',
            '<b>Backups:</b> Automatische 6-Stunden Backups (00:00, 06:00, 12:00, 18:00 Uhr)'
          ]
        },
        {
          heading: 'Besonderes & Features',
          list: [
            'Spieler-Handel & Villager-Trading',
            'Skills, Leveling und Fähigkeiten (AuraSkills ab Level 6)',
            'Veinminer Verzauberung (Spitzhacken ab Level 30+)',
            'Dungeons & Ruinen (BetterStructures)',
            'Visuelle Mob-Lebensbalken (HealthBar)',
            'Quality of Life: GSit, ClickVillagers, HarvestMaster, AxGraves, 1-Player Sleep',
            'Interaktive Live-Karte'
          ]
        },
        {
          heading: 'Installierte Plugins',
          list: [
            'AuraSkills',
            'AxGraves',
            'BetterStructures',
            'ClickVillagers',
            'EssentialsC',
            'GSit',
            'HarvestMaster',
            'HealthBar',
            'ViaBackwards',
            'ViaVersion'
          ]
        }, {
          heading: 'Nützliche Links',
          list: [
            '<a href="https://minecraft.fandom.com/de/wiki/Minecraft_Wiki" target="_blank">Minecraft Wiki</a>',
            '<a href="https://minecraft.tools/de" target="_blank">Minecraft Tools - Nützliche MC Werkzeuge</a>',
            // '<a href="https://mcmmo.fandom.com/wiki/Befehle_in_deutscher_Sprache" target="_blank">McMMO Chat Befehle</a>',
            '<a href="https://wiki.aurelium.dev/auraskills" target="_blank">AuraSkills Wiki</a>',
          ],
          isUl: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.border-b-subtle:not(:last-child) {
  border-bottom: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity, 0.12));
}
</style>
