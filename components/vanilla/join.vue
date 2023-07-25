<template>
  <div>
    <slot />

    <v-list bg-color="transparent" density="compact">
      <v-list-subheader class="text-body-1 text-warning">(Die wirkliche Anweisung kann bei Konsolen abweichen, hatte bisher kein Minecraft auf Konsole zur Hand)</v-list-subheader>
      <v-list-item v-for="(item, itemIndex) in setupItems" :key="itemIndex">
        <template v-slot:prepend>
          <span class="mr-5">
            {{ itemIndex + 1 }}.
          </span>
        </template>
        <v-list-item-title class="d-block" v-html="item"></v-list-item-title>
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
        'Füge einen neuen Server hinzu mit einem beliebigen Namen und der Serveradresse <b class="primary-text">jonilieh.de</b>',
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
