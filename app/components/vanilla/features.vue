<template>
  <div>
    <slot />

    <!-- Feature Cards Grid -->
    <v-row class="mt-2" dense>
      <v-col v-for="(feature, index) in featureList" :key="index" cols="12" md="6">
        <v-card class="h-100 border rounded-xl elevation-1">
          <v-card-item class="pb-1">
            <template #prepend>
              <v-avatar :color="feature.color" variant="tonal" class="mr-3" size="44">
                <v-icon :icon="feature.icon" size="22"></v-icon>
              </v-avatar>
            </template>

            <v-card-title class="text-h6 font-weight-bold">
              {{ feature.title }}
            </v-card-title>
            <v-card-subtitle v-if="feature.tagline">
              {{ feature.tagline }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-text class="pt-2">
            <p v-if="feature.description" class="text-body-2 mb-3">
              {{ feature.description }}
            </p>

            <!-- Skill Tags list -->
            <div v-if="feature.skills && feature.skills.length" class="mb-3">
              <div class="text-caption font-weight-bold mb-2 text-medium-emphasis">
                Verfügbare Skills:
              </div>
              <div class="d-flex flex-wrap ga-1">
                <v-chip
                  v-for="(skill, sIdx) in feature.skills"
                  :key="sIdx"
                  size="x-small"
                  variant="tonal"
                  color="primary"
                >
                  {{ skill }}
                </v-chip>
              </div>
            </div>

            <!-- Active abilities list -->
            <div v-if="feature.items && feature.items.length" class="mt-2">
              <div v-if="feature.itemsTitle" class="text-caption font-weight-bold mb-1 text-primary">
                {{ feature.itemsTitle }}:
              </div>
              <v-list density="compact" class="bg-transparent py-0">
                <v-list-item
                  v-for="(item, itemIdx) in feature.items"
                  :key="itemIdx"
                  class="px-0 py-1"
                >
                  <template #prepend>
                    <v-icon :color="feature.color" size="small" class="mr-2">{{ item.icon || 'mdi-star' }}</v-icon>
                  </template>
                  <div class="text-body-2">
                    <strong>{{ item.name }}</strong> <span class="text-medium-emphasis">({{ item.skill }})</span>: {{ item.effect }}
                  </div>
                </v-list-item>
              </v-list>
            </div>

            <!-- QoL Bullet points list -->
            <v-list v-if="feature.bullets" density="compact" class="bg-transparent mt-2 py-0">
              <v-list-item
                v-for="(bullet, bIdx) in feature.bullets"
                :key="bIdx"
                class="px-0 py-1"
              >
                <template #prepend>
                  <v-icon color="success" size="small" class="mr-2">mdi-check-circle-outline</v-icon>
                </template>
                <div class="text-body-2">
                  <strong>{{ bullet.label }}:</strong> {{ bullet.text }}
                </div>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// Props oder setup Logik falls benötigt
</script>

<script type="ts">
/**
 * Datenstruktur für die Features auf dem Server
 */
export default {
  name: 'FeaturesComponent',

  data: () => ({
    featureList: [
      {
        title: 'RPG Skills & Mana (AuraSkills)',
        tagline: 'Leveln & Spezialfähigkeiten',
        icon: 'mdi-sword-cross',
        color: 'primary',
        skills: ['Bergbau', 'Holzfällen', 'Landwirtschaft', 'Kampf', 'Bogenschießen', 'Ausgrabung', 'Angeln', 'Gewandtheit', 'Verzauberung', 'Alchemie'],
        itemsTitle: 'Aktive Fähigkeiten (ab Skill-Level 6)',
        items: [
          { name: 'Treecapitator', skill: 'Holzfällen', effect: 'Fällt ganze Bäume auf einmal', icon: 'mdi-axe' },
          { name: 'Speed Mine', skill: 'Bergbau', effect: 'Kurzer Haste X Boost', icon: 'mdi-pickaxe' },
          { name: 'Replenish', skill: 'Landwirtschaft', effect: 'Pflanzt geerntete Pflanzen automatisch nach', icon: 'mdi-sprout' }
        ]
      },
      {
        title: 'Dungeons & Erkundung (BetterStructures)',
        tagline: 'Ruinen & Beute',
        icon: 'mdi-castle',
        color: 'warning',
        description: 'Generiert über 100+ neue benutzerdefinierte Strukturen in der Welt.',
        bullets: [
          { label: 'Oberwelt', text: 'Antike Tempel, verfallene Ruinen und Außenposten.' },
          { label: 'Nether & End', text: 'Gefährliche Bastionen und Festungen voller Gefahren.' },
          { label: 'Wertvoller Loot', text: 'Kisten und Fässer mit seltener Beute belohnen die Erkundung.' }
        ]
      },
      {
        title: 'Mob-Lebensbalken (HealthBar)',
        tagline: 'KP-Anzeige im Kampf',
        icon: 'mdi-heart-pulse',
        color: 'error',
        description: 'Visuelle Lebensanzeige über Mobs während des Kampfes.',
        bullets: [
          { label: 'Echtzeit-KP', text: 'Zeigt verbleibende Gesundheit & Herzen getroffener Mobs.' },
          { label: 'Übersicht im Kampf', text: 'Perfekt für Dungeons, Bosskämpfe und Jagd.' },
          { label: 'Serverseitig', text: 'Funktioniert direkt ohne jegliche Client-Mods.' }
        ]
      },
      {
        title: 'Quality of Life Features',
        tagline: 'Praktische Helfer',
        icon: 'mdi-auto-fix',
        color: 'info',
        bullets: [
          { label: 'GSit', text: 'Auf Treppen/Stufen sitzen oder /sit, /lay, /crawl nutzen.' },
          { label: 'ClickVillagers', text: 'Shift + Rechtsklick um Villager ins Inventar zu packen.' },
          { label: 'HarvestMaster', text: 'Rechtsklick auf reife Feldfrucht erntet und pflanzt neu an.' },
          { label: 'AxGraves', text: 'Beim Tod entsteht eine Grabtruhe für eure Items.' },
          { label: '1-Player Sleep', text: '1 Spieler reicht im Bett aus, um die Nacht zu überspringen.' }
        ]
      }
    ]
  })
}
</script>
