<template>
  <div>
    <slot />

    <v-list color="transparent" dense>
      <v-subheader class="heading primary--text">Server beitreten</v-subheader>
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
        '(Stellt sicher, dass ihr einen <a href="https://login.live.com/login.srf" target="_blank">Microsoft-Account</a> habt)',
        'Starte Minecraft',
        'Gehe auf Mehrspieler',
        'Füge einen neuen Server hinzu mit einem beliebigen Namen und der Serveradresse <b class="primary--text">jonilieh.de</b>',
        `
        Kontaktiert mich um auf die Whitelist(Ausnahmeliste) zu kommen, ich brauche dafür den Gamertag von eurem Microsoftkonto bzw. Minecraftnamen
        <span class="caption">(auf der mobilen Version ist das Whitelisten etwas schwieriger)</span>
        `,
        'Wenn ihr hinzugefügt wurdet, könnt ihr euch verbinden, viel Spaß! :)'
      ]
    }
  }
}
</script>
