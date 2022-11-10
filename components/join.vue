<template>
  <div>
    <slot />

    <v-list color="transparent" dense>
      <v-subheader class="heading info--text">Die wirkliche Anweisung kann bei Konsolen abweichen, hatte bisher kein Minecraft auf Konsole zur Hand</v-subheader>
      <v-list-item v-for="(item, itemIndex) in setupItems" :key="itemIndex">
        <v-list-item-icon class="text-right">
          {{ itemIndex+1 }}
        </v-list-item-icon>
        <v-list-item-content class="d-block" v-html="item"></v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script type="ts">
export default {
  name: "JoinComponent",

  data() {
    return {
      setupItems: [
        '(Stell sicher, dass du einen <a href="https://login.live.com/login.srf" target="_blank">Microsoft-Account</a> hast)',
        'Starte Minecraft',
        'Gehe auf Mehrspieler',
        'Füge einen neuen Server hinzu mit einem beliebigen Namen und der Serveradresse <b class="primary--text">jonilieh.de</b>',
        'Trete den nun auffindbaren Server bei, es sollte eine Fehlermeldung im Zusammenhang mit der Whitelist geben',
        `
        Kontaktiere mich um auf die Whitelist(Ausnahmeliste) zu kommen, ich brauche dafür den Gamertag von eurem Microsoftkonto bzw. Minecraftnamen
        <br/>
        <span class="caption mr-1">(Ich sollte euren Namen durch die Fehlermeldung auch im Serverlog sehen)</span>
        <span class="caption">(auf der mobilen Version ist das Whitelisten etwas schwieriger)</span>
        `,
        'Wenn ihr hinzugefügt wurdet, könnt ihr euch verbinden',
        'Viel Spaß, ich freue mich auf eure Bauten :)'
      ]
    }
  }
}
</script>
