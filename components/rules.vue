<template>
  <div>
    <slot />
    <v-list color="transparent" dense>
      <v-list-item v-for="(rule, ruleIndex) in rules" :key="ruleIndex" class="success--text text--darken-1" link>
        <v-list-item-icon>
          <v-icon color="primary" small>
            mdi-star
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          {{ rule }}
        </v-list-item-content>
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
      'Kein Spam oder Werbung im Chat',
      'Industrielle Bauten bitte verschönern bspw. Mobfarmen',
      'Keine Verwendung von Hack Clients oder das Ausnutzen von Glitches / Bugs',
      'Die Serverleitung übernimmt keine Haftung für von Spielern begangene Taten',
      'Verstoß gegen die Regeln kann zum Serverauschluss führen',
      'Bitte Möglichkeit für andere Spieler geben den Enderdrachen gemeinsam zu besiegen',
    ]
  })
}
</script>
