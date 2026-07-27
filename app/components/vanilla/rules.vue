<template>
  <div>
    <slot />
    <v-card variant="outlined" class="rounded-xl border mt-2">
      <v-list bg-color="transparent" density="comfortable">
        <v-list-item v-for="(rule, ruleIndex) in rules" :key="ruleIndex" class="py-2">
          <template #prepend>
            <v-avatar color="primary" variant="tonal" size="28" class="mr-3">
              <v-icon color="primary" size="16">mdi-shield-check</v-icon>
            </v-avatar>
          </template>
          <div class="text-body-1 font-weight-medium">
            {{ rule }}
          </div>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script type="ts">
export default {
  name: 'RulesComponent',

  data: () => ({
    rules: [
      'Respektvoller Umgang',
      'Creeperlöcher bitte wieder auffüllen',
      'Kein grundloses Töten anderer Spieler und das Errichten von Spielerfallen',
      'Keine mutwillige Zerstörung von Bauwerken anderer Spieler',
      'Keine Verwendung ungangemessener oder rassistischer Symbole / Wörter, sowie hassverbreitende Inhalte',
      'Belästigung anderer Spieler im Chat, sowie auch andersweitig ist untersagt',
      // 'Kein Spam oder Werbung im Chat',
      'Industrielle Bauten bitte verschönern bspw. Mobfarmen',
      'Keine Verwendung von Hack Clients oder das Ausnutzen von Glitches / Bugs',
      'Die Serverleitung übernimmt keine Haftung für von Spielern begangene Taten',
      'Verstoß gegen die Regeln kann zum Serverauschluss führen',
      // 'Bitte Möglichkeit für andere Spieler geben den Enderdrachen gemeinsam zu besiegen',
    ]
  })
}
</script>
