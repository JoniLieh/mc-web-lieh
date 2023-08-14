<template>
  <div>
    <h1 class="my-12 text-sm-h1 text-h2">
      Modded
    </h1>
    <h2 class="my-12 text-sm-h2 text-h3">
      Allgemeine Infos
    </h2>

    <div class="text-overline text-error">Modded Minecraft funktioniert zurzeit nur auf der Java-PC-Version</div>
    <br>
    
    <v-alert title="Server-Adresse" icon="mdi-web" type="success" border="start" variant="tonal">
      <span class="text-primary">
        jonilieh.de
      </span>
    </v-alert>

    <br>

    <v-alert title="Downloads" icon="mdi-download" color="accent" border="start" variant="tonal">
      <ul>
        <li>
          <a href="https://www.dropbox.com/sh/vecc59f1pbamnn2/AACvDgWn9QGfWofwsVFOTThza?dl=0" target="_blank">
            Modpack & Client <v-icon color="primary" end>mdi-link-variant</v-icon>
          </a>
        </li>
        <li>
          <a href="https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe" target="_blank">
            Java 17 JDK
            <v-icon color="primary" end>mdi-link-variant</v-icon>
          </a>
        </li>
      </ul>
    </v-alert>

    <br>

    <v-alert title="Installation" icon="mdi-wrench" type="info" border="start" variant="tonal">
      <v-list lines="two" class="installation-list-container" rounded>
        <v-list-item
          v-for="(item, index) in installationItems" 
          :key="index"
        >
          <template v-slot:prepend>
            <span class="mr-5">
              {{ index + 1 }}.
            </span>
          </template>
          <v-list-item-title v-html="item.title" class="installation-text"></v-list-item-title>
          <v-list-item-subtitle v-show="!!item.subtitle" v-html="item.subtitle" class="installation-text"></v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-alert>

    <br>

    <v-alert title="Regeln" icon="mdi-alert" type="error" border="start" variant="text">
      <ul>
        <li>Gleiche Regeln wie bei <nuxt-link to="/#rules">Vanilla</nuxt-link></li>
        <li>Der Server hat eine Anzahl an Chunks vorgeneriert, wenn wir also merkt, dass ihr neue Chunks generiert, haltet euch ein wenig zurück für die anderen Spieler :) 
          <br>
          <small class="caption">(Server hat leider nur begrenzen RAM)</small>
        </li>
        <li>Merkt euch, wo ihr Chunk Loader verwendet, auch Quarrys sind Chunk Loader!</li>
        <li>Haltet euch nicht in ungeladeten Chunks auf, wartet in einem geladenem Chunk und lasst den Server rendern</li>
      </ul>
    </v-alert>

    <br>
    
    <v-alert title="Guides" type="accent" icon="mdi-charity" border="start" variant="tonal">
      <ul>
        <li v-for="(guideItem, guideItemIndex) in guideItems" :key="guideItemIndex">
          <a :href="guideItem.url" target="_blank">
            {{guideItem.text}} <v-icon color="primary" end>mdi-link-variant</v-icon>
          </a>
        </li>
      </ul>
    </v-alert>


    <h2 class="my-12 text-sm-h2 text-h4">
      Problembehandlung
    </h2>

    <section v-for="(item, index) in errorItems" :key="index" class="mb-4">
      <h5 class="text-h5">
        <v-icon color="error" start>mdi-alert</v-icon>
        <span v-html="item.title"></span>
      </h5>
      <v-divider class="my-2"></v-divider>
      <ul class="pl-11">
        <li v-for="(step, stepIndex) in item.steps" :key="stepIndex" v-html="step"></li>
      </ul>
    </section>

    <h4 class="mt-12 mb-4 text-sm-h4 text-overline">Änderungen</h4>
    <ul class="text-overline">
      <li>Von MultiMC auf PrismLauncher gewechselt, weil man damit Mods updaten und einfach hinzufügen kann</li>
      <li>Neue Regel hinzugefügt zwecks Chunk Loaders</li>
      <li>Guides hinzugefügt</li>
    </ul>
  </div>
</template>

<script setup>

const installationItems = [
  {
    title: "Stelle sicher, dass du einen Minecraft-Account besitzt und er mit deinem Microsoft-Account verknüpft ist.",
    subtitle: `(Hilfe dazu findest du auch <a href="/#installation">hier</a>)`
  }, {
    title: "Habe mindestens <code>Java JDK 17</code> installiert, alternativ einfach ",
    subtitle: `(<code>Java JRE</code> reicht nicht aus für Mods; Vanilla Minecraft kommt bereits mit eigenem Java, allerdings brauchen Mods die Entwicklungsumgebung von Java)`
  }, {
    title: "Downloade das Modpack und den Client",
    subtitle: `(Wenn du bereits <code>PrismLauncher</code> o. <code>MultiMC</code> besitzt, brauchst du nur das Modpack; Alternativ kann <code>PrismLauncher</code> auch von der offiziellen Seite heruntergeladen werden)`
  }, {
    title: "Entpacke <code>PrismLauncher... .zip</code> wo du es wieder findest (zB. auf dem Desktop)",
    subtitle: `(Der <code>Windows-Explorer</code> kann mittlerweile Packen und Entpacken)`
  }, {
    title: "Starte <code>prismlauncher.exe</code> aus dem entpackten Ordner",
    subtitle: `(Hiermit wirst du dein Minecraft starten, also kannst du auch eine Verknüpfung auf deinen Desktop dafür einrichten)`
  }, {
    title: "Gehe den Installationsassistenten im <code>PrismLauncher</code> durch.",
    subtitle: `Du bist fertig, wenn es so aussieht <a href="https://i.imgur.com/YTCyrMp.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: "Verknüpfte deinen Minecraft-Account mit dem <code>PrismLauncher</code> (oben rechts im Launcher)"
  }, {
    title: `Füge nun das Modpack hinzu, indem du oben links auf <code>"Instanz hinzufügen"</code> gehst, danach auf <code>"Importiere ZIP-Datei"</code> und anschließend <code>"Durchsuchen"</code>, nun navigiere zu der heruntergeladen <code>Modpack.zip</code>-Datei`,
    subtitle: `<a href="https://i.imgur.com/YTCyrMp.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: `Starte nun das Modpack indem du auf die hinzugefügt Instanz doppelklickst oder durch Auswahl und dann an der Seite auf <code>"Starten"</code>`,
    subtitle: `Es kann vorkommen, dass es bei 99% hängt, siehe Problembehandlung; (Beide <code>.zip</code>s können jetzt wieder gelöscht werden)`
  }, {
    title: `Ändere noch die <code>RAM</code>-Zuweisung in den Einstellungen vom <code>PrismLauncher</code>, in der Regel die Hälfte von deinem totalen Arbeitsspeicher ich empfehle mind. 8GB.`,
    subtitle: `<a href="https://i.imgur.com/xIgWoQM.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: `Ggfls. änderst noch Maus-, Tastatur & Grafikeinstellungen in Minecraft, F11 für Vollbildmodus`,
    subtitle: `Es muss sonst nichts weiter installiert werden, Resource Pack und Shaders sind bereits enthalten :)`
  }
]

const guideItems = [
  {
    text: "Silent Gear (Individuelle Ausrüstungen mit außergewöhnlichen Fähigkeiten)",
    url: "https://allthemods.github.io/alltheguides/gg/silent-gear/"
  },{
    text: "Mekanism (Endgame Maschinen und Ausrüstung)",
    url: "https://allthemods.github.io/alltheguides/gg/mekanism/"
  },{
    text: "XNet (Logistik)",
    url: "https://www.mcjty.eu/docs/mods/xnet/"
  },{
    text: "Refined Storage (Logistik & Storage)",
    url: "https://allthemods.github.io/alltheguides/gg/refined-storage/"
  },{
    text: "Apotheosis (Magie)",
    url: "https://www.curseforge.com/minecraft/mc-mods/apotheosis"
  },{
    text: "RFTools (Logistik)",
    url: "https://www.mcjty.eu/docs/mods/rftools/"
  },{
    text: "Ad Astra (Planeten bereise)",
    url: "https://ad-astra-mod.fandom.com/wiki/Ad_Astra_Mod_Wiki"
  },
]

const errorItems = [
  {
    title: `Java-Probleme`,
    steps: [
      `JDK 17 installiert?`,
      `In den PrismLauncher-Einstellungen kann man Java durch Auto-Erkennung die installierten Java-Versionen auswählen`,
      `<a href="https://i.imgur.com/NMdh6zZ.png" target="_blank">Hilfe Bild</a>`,
      `Haben Sie versucht das Gerät aus- und einzuschalten? (Starte den PC nach der Java-Installation neu)`
    ]
  },{
    title: `Das Spiel ruckelt`,
    steps: [
      `Wechsle zu einem Low-Shader (Hotkey: <code>O</code>)`,
      `Stelle die Sichtweite / Grafik herunter`,
      `Erhöhe den RAM für die Minecraft-Instanz im PrismLauncher`
    ]
  },{
    title: `<code class="text-error">Error loading mods</code> zB. <code>Create (create) has failed to load correctly</code>`,
    steps: [
      `Starte das Spiel neu`
    ]
  },{
    title: `Mods sind nicht mehr aktuell / unterschiedliche Mods`,
    steps: [
      `Bezieht das Modpack erneut und installiert es erneut`,
      `Aktualisiert eure Mods im PrismLauncher <a href="https://i.imgur.com/eeya0YW.png" target="_blank">Hilfe Bild</a>`
    ]
  },{
    title: `Installation hängt bei 99%`,
    steps: [
      `Neustarte den Download, ggfls. Launcher neustarten`
    ]
  }
]

</script>

<style lang="scss" scoped>
.installation-list-container {
  background-color: rgba(255, 255, 255, 0);
}
.installation-text {
  white-space: normal;
}
</style>