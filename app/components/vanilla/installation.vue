<template>
  <div>
    <slot />

    <v-alert type="info" variant="tonal" class="mb-4 rounded-xl" density="comfortable">
      Minecraft könnt ihr im Laden oder Online kaufen. Für den PC empfehlen und unterstützen wir primär den <b>PrismLauncher</b>, da sich dort Mods, Shader & Texturenpakete extrem einfach verwalten lassen.
    </v-alert>

    <!-- PC Section -->
    <v-card variant="outlined" class="rounded-xl border pa-4 mb-4">
      <div class="d-flex align-center mb-3">
        <v-icon color="primary" class="mr-2" size="24">mdi-laptop</v-icon>
        <span class="text-h6 font-weight-bold text-primary" id="prismlauncher">PC (PrismLauncher - Empfohlen)</span>
      </div>
      <div>
        <div 
          v-for="(item, itemIndex) in itemsPc" 
          :key="itemIndex"
          class="d-flex align-baseline py-2 border-b-subtle"
        >
          <div 
            class="text-right font-weight-bold text-primary mr-3 text-body-2" 
            style="width: 32px; min-width: 32px;"
          >
            {{ itemIndex + 1 }}.
          </div>
          <div class="flex-grow-1 text-body-2" v-html="item"></div>
        </div>
      </div>
    </v-card>

    <!-- Mobil Section -->
    <v-card variant="outlined" class="rounded-xl border pa-4 mb-4">
      <div class="d-flex align-center mb-3">
        <v-icon color="primary" class="mr-2" size="24">mdi-cellphone</v-icon>
        <span class="text-h6 font-weight-bold text-primary">Mobil</span>
      </div>
      <div>
        <div 
          v-for="(item, itemIndex) in itemsMobile" 
          :key="itemIndex+10"
          class="d-flex align-baseline py-2 border-b-subtle"
        >
          <div 
            class="text-right font-weight-bold text-primary mr-3 text-body-2" 
            style="width: 32px; min-width: 32px;"
          >
            {{ itemIndex + 1 }}.
          </div>
          <div class="flex-grow-1 text-body-2" v-html="item"></div>
        </div>
      </div>
    </v-card>

    <!-- Konsole Section -->
    <v-card variant="outlined" class="rounded-xl border pa-4">
      <div class="d-flex align-center mb-3">
        <v-icon color="primary" class="mr-2" size="24">mdi-controller</v-icon>
        <span class="text-h6 font-weight-bold text-primary">Konsole</span>
      </div>
      <div>
        <div 
          v-for="(item, itemIndex) in itemsConsole" 
          :key="itemIndex+100"
          class="d-flex align-baseline py-2 border-b-subtle"
        >
          <div 
            class="text-right font-weight-bold text-primary mr-3 text-body-2" 
            style="width: 32px; min-width: 32px;"
          >
            {{ itemIndex + 1 }}.
          </div>
          <div class="flex-grow-1 text-body-2" v-html="item"></div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script type="ts">
export default {
  name: 'InstallationComponent',

  data: () => ({
    itemsPc: [
      `Für den Kauf brauchst du ein Microsoft-Konto. Kaufen für: <a href="https://www.minecraft.net/de-de/choose-your-game" target="_blank">Windows</a> <small>(Psst oder für weniger unter <a href="https://www.keyforsteam.de/katalog/?search_name=minecraft" target="_blank">keyforsteam.de</a>)</small>`,
      `Lade dir den <a href="https://prismlauncher.org/download/" target="_blank">PrismLauncher herunter</a> und installiere ihn.`,
      `Starte den PrismLauncher und verknüpfe oben rechts dein Microsoft-Konto.`,
      `Stelle sicher, dass die neueste Version von <code>Java JDK</code> installiert ist (<a href="https://www.oracle.com/de/java/technologies/downloads/" target="_blank">Java Download</a>). In PrismLauncher unter <i>Einstellungen</i> &rarr; <i>Java</i> &rarr; <i>Auto-Erkennung</i> auswählen.`,
      `Füge eine neue Instanz für Version <b>26.2</b> hinzu oder importiere eine bestehende Instanz-Zip-Datei (<a href="https://i.imgur.com/YTCyrMp.png" target="_blank">Hilfe Bild</a>).`,
      `<b>Mods, Shader & Texturenpakete:</b> Klicke auf <i>Instanz bearbeiten</i> und füge in der linken Leiste Mods, Shader oder Texturen mit 1 Klick hinzu!`
    ],
    itemsMobile: [
      `
      Kaufen für:
      <a href="https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl" target="_blank">
      Android
      </a><br/>
      Kaufen für:
      <a href="https://apps.apple.com/app/minecraft/id479516143" target="_blank">
      iOS
      </a>`,
      'Ladet euch die App anschließend herunter und startet Sie',
      'Loggt euch links unten auf "Anmelden" ein'
    ],
    itemsConsole: [
      `
      Kaufen für:
      <a href="https://www.xbox.com/de-de/games/store/minecraft/9nblggh537bl?ocid=MCX1_int_omc_min&rtc=3&activetab=pivot:overviewtab" target="_blank">XBOX</a>
      <br/>
      Kaufen für:
      <a href="https://store.playstation.com/en-us/product/UP4433-CUSA00744_00-MINECRAFTPS40001" target="_blank">Playstation</a>
      <br/>
      Kaufen für:
      <a href="https://www.nintendo.com/store/products/minecraft-switch/" target="_blank">Nintendo Switch</a>
      <br/>
      <small>(Psst oder für weniger unter <a href="https://www.keyforsteam.de/katalog/?search_name=minecraft" target="_blank">keyforsteam.de</a>)</small>
      `,
      'Ladet euch anschließend das Spiel über eure Bibliothek herunter',
      'Wartet auf die Installation und startet das Spiel'
    ]
  })
}
</script>

<style scoped>
.border-b-subtle:not(:last-child) {
  border-bottom: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity, 0.12));
}
</style>
