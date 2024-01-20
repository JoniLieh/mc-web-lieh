<template>
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
</template>

<script lang="ts" setup>
interface installationItem {
  title: string;
  subtitle?: string;
}

const installationItems: installationItem[] = [
  {
    title: "Stelle sicher, dass du einen Minecraft-Account besitzt und er mit deinem Microsoft-Account verknüpft ist.",
    subtitle: `(Hilfe dazu findest du auch <a href="/#installation">hier</a>)`
  }, {
    title: "Habe <code>Java JDK 17</code> installiert",
    subtitle: `(<code>Java JRE</code> reicht nicht aus für Mods; Vanilla Minecraft kommt bereits mit eigenem Java, allerdings brauchen Mods die Entwicklungsumgebung von Java)`
  }, {
    title: "Downloade den Client(PrismLauncher)",
    subtitle: `(Wenn du bereits <code>PrismLauncher</code> besitzt, brauchst du nur natürlich nur noch das Modpack`
  }, {
    title: "<i><b>(Portable)</b></i> Entpacke <code>PrismLauncher... .zip</code> wo du es wieder findest (zB. auf dem Desktop)",
    subtitle: `(Der <code>Windows-Explorer</code> kann mittlerweile Packen und Entpacken)`
  }, {
    title: "<i><b>(Portable)</b></i> Starte <code>prismlauncher.exe</code> aus dem entpackten Ordner",
    subtitle: `(Hiermit wirst du dein Minecraft starten, also kannst du auch eine Verknüpfung auf deinen Desktop dafür einrichten)`
  }, {
    title: "Gehe den Installationsassistenten im <code>PrismLauncher</code> durch.",
    subtitle: "Wahlweise RAM angeben mit mindestens 8GB"
  }, {
    title: "Verknüpfte deinen Minecraft-Account mit dem <code>PrismLauncher</code> (oben rechts im Launcher)",
    subtitle: `Es wird der Browser gestartet, gebe den Code ein, melde dich an und bestätige es`
  }, {
    title: `Füge nun das Modpack hinzu indem du oben links auf <code>"Instanz hinzufügen"</code> gehst, danach auf <code>"CurseForge"</code> auf der linken Seite, anschließend suche nach <code>"bmc1"</code>, nun wähle die <code>[FABRIC]</code> Version aus und drücke OK`,
    subtitle: `<a href="https://i.imgur.com/aj7WDam.png" target="_blank">Hilfe Bild</a>`
  },{
    title: `PrismLauncher wird einige Mods nicht automatisch herunterladen, drücke im "Blockierte Mods gefunden"-Fenster auf <code>"Öffne Fehlende"</code>`,
    subtitle: `<a href="https://i.imgur.com/lMlLxoD.png" target="_blank">Hilfe Bild</a>`
  },{
    title: `Es sollten nun einige Tabs in einem Browser aufgehen, stelle sicher dass in jedem Tab die benötigte Mod heruntergeladen wird. <b>Bei einem Tab erscheint <code>{"statusCode":404,"message":"Not Found"}</code>, das ist normal</b>`,
    subtitle: `Du kannst live im Fenster sehen, welche bereits heruntergeladen wurden, die "Not Found"-Mod holen wir sofort`
  },{
    title: `Drücke OK und warte bis alles heruntergeladen wird. Gehe rechts bei deiner erstellen Instanz auf Bearbeiten und unter "Mods" → "Mods herunterladen". Suche nun bei <code>Modrinth</code> nach <code>"Sodium"</code> → Doppelklick → <code>"Überprüfen und bestätigen"</code>`,
    subtitle: `<a href="https://i.imgur.com/V7dLyqC.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: `Ändere noch die <code>RAM</code>-Zuweisung in den Einstellungen vom <code>PrismLauncher</code>, mind. 8GB.`,
    subtitle: `<a href="https://i.imgur.com/xIgWoQM.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: `Starte nun das Modpack indem du auf die hinzugefügt Instanz doppelklickst oder durch Auswahl und dann an der Seite auf <code>"Starten"</code>`,
  }, {
    title: `Ggfls. änderst noch Maus-, Tastatur & Grafikeinstellungen in Minecraft, <b>F11 für Vollbildmodus</b>`
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