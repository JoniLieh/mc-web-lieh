<template>
  <div>
    <slot />
    <v-list bg-color="transparent" density="compact">
      <v-list-item v-for="(rule, ruleIndex) in rules" :key="ruleIndex" class="success--text text--darken-1" link>
        <template v-slot:prepend>
          <v-icon color="primary" start>
            mdi-star
          </v-icon>
        </template>
        <v-list-item-title>
          {{ rule }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
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
