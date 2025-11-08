<template>
  <div>
    <slot />
    <v-alert type="info" variant="tonal" class="mb-2" density="compact">
      Minecraft könnt ihr auch regulär im Laden kaufen, hier gibt es die Online-Anleitung.
    </v-alert>
    
    <v-list bg-color="transparent" density="comfortable">
      <v-list-subheader class="text-h6 text-primary">PC</v-list-subheader>
      <v-list-item v-for="(item, itemIndex) in itemsPc" :key="itemIndex">
        <template v-slot:prepend>
          <span class="mr-5">
            {{ itemIndex + 1 }}.
          </span>
        </template>
        <v-list-item-title class="d-block" v-html="item"></v-list-item-title>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-subheader class="text-h6 text-primary">Mobil</v-list-subheader>
      <v-list-item v-for="(item, itemIndex) in itemsMobile" :key="itemIndex+1*10">
        <template v-slot:prepend>
          <span class="mr-5">
            {{ itemIndex + 1 }}.
          </span>
        </template>
        <v-list-item-title class="d-block" v-html="item"></v-list-item-title>
      </v-list-item>
      
      <v-divider class="my-2" />

      <v-list-subheader class="text-h6 text-primary">Konsole</v-list-subheader>
      <v-list-item v-for="(item, itemIndex) in itemsConsole" :key="itemIndex+1*100">
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
  name: 'InstallationComponent',

  data: () => ({
    itemsPc: [
      'Für den Kauf braucht ihr ein Microsoft-Konto, dieses ist kostenlos und evtl. habt ihr bereits eins.',
      `
      Kaufen für:
      <a href="https://www.minecraft.net/store/minecraft-java-edition/buy" target="_blank">Windows</a>`,
      'Geht durch den Kaufprozess, erstellt euren Account und vergebt euch einen Namen',
      'Folgt am besten nun den Anweisungen für den <a href="#prismlauncher">PrismLauncher</a> weiter unten',
      'Alternativ: Loggt euch auf <a href="https://www.minecraft.net" target="_blank">Minecraft.net</a> ein und ladet Minecraft herunter <a href="https://launcher.mojang.com/download/MinecraftInstaller.exe" target="_blank">Minecraft-Installer</a>',
      'Installiert den Client(MinecraftInstaller.exe), startet ihn und loggt euch auch dort ein(oben links steht euer Microsoft-Account)',
      'Ladet euch dort die neueste Vollversion herunter und geht anschließend auf "Spielen"'
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
      `,
      'Ladet euch anschließend das Spiel über eure Bibliothek herunter',
      'Wartet auf die Installation und startet das Spiel'
    ]
  })
}
</script>
