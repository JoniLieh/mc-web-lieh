<template>
  <div>
    <slot />

    <v-card variant="outlined" class="rounded-xl border pa-4 mt-2">
      <div class="text-caption font-italic text-warning mb-3">
        (Die wirkliche Anweisung kann bei Konsolen abweichen, hatte bisher kein Minecraft auf Konsole zur Hand)
      </div>

      <div class="aligned-list">
        <div 
          v-for="(item, itemIndex) in setupItems" 
          :key="itemIndex"
          class="d-flex align-baseline py-2 border-b-subtle"
        >
          <div 
            class="text-right font-weight-bold text-primary mr-3 text-body-1" 
            style="width: 32px; min-width: 32px;"
          >
            {{ itemIndex + 1 }}.
          </div>
          <div class="flex-grow-1 text-body-1" v-html="item"></div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script type="ts">
export default {
  name: "JoinComponent",

  data() {
    return {
      setupItems: [
        '(Stell sicher, dass du einen <a href="https://login.live.com/login.srf" target="_blank">Microsoft-Account</a> hast)',
        'Starte Minecraft (Version 26.2+)',
        'Gehe auf Mehrspieler (Multiplayer)',
        'Füge einen neuen Server hinzu mit der Serveradresse <b class="primary-text">joni.li</b>',
        'Trete dem Server bei, es kann eine Whitelist-Meldung erscheinen',
        `
        Kontaktiere mich um auf die Whitelist (Ausnahmeliste) zu kommen, ich brauche dafür deinen Gamertag / Minecraft-Namen.
        <br/>
        <span class="caption mr-1">(Ich sehe deinen Namen durch den Verbindungsversuch auch im Serverlog)</span>
        <span class="caption">(Auf der Bedrock / Pocket-Edition ist das Whitelisten ggf. etwas abweichend)</span>
        `,
        'Sobald du freigeschaltet bist, kannst du dich direkt verbinden',
        'Viel Spaß beim Spielen und Bauen!'
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
