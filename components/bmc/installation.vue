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
    title: "Habe mindestens <code>Java JDK 17</code> installiert ",
    subtitle: `(<code>Java JRE</code> reicht nicht aus für Mods; Vanilla Minecraft kommt bereits mit eigenem Java, allerdings brauchen Mods die Entwicklungsumgebung von Java)`
  }, {
    title: "Downloade das Modpack und den Client",
    subtitle: `(Wenn du bereits <code>PrismLauncher</code> besitzt, brauchst du nur natürlich nur noch das Modpack)`
  }, {
    title: "<i><b>(Portable)</b></i> Entpacke <code>PrismLauncher... .zip</code> wo du es wieder findest (zB. auf dem Desktop)",
    subtitle: `(Der <code>Windows-Explorer</code> kann mittlerweile Packen und Entpacken)`
  }, {
    title: "<i><b>(Portable)</b></i> Starte <code>prismlauncher.exe</code> aus dem entpackten Ordner",
    subtitle: `(Hiermit wirst du dein Minecraft starten, also kannst du auch eine Verknüpfung auf deinen Desktop dafür einrichten)`
  }, {
    title: "Gehe den Installationsassistenten vom <code>PrismLauncher</code> durch."
  }, {
    title: "Verknüpfte deinen Minecraft-Account mit dem <code>PrismLauncher</code> (oben rechts im Launcher)"
  }, {
    title: `Füge nun das Modpack hinzu, indem du oben links auf <code>"Instanz hinzufügen"</code> gehst, danach auf <code>"Importieren"</code> und anschließend <code>"Durchsuchen"</code>, nun navigiere zu der heruntergeladen <code>Better MC... .zip</code>-Datei`,
    subtitle: `<a href="https://i.imgur.com/YTCyrMp.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: `Starte nun das Modpack indem du auf die hinzugefügt Instanz doppelklickst oder durch Auswahl und dann an der Seite auf <code>"Starten"</code>`,
    subtitle: `Es kann vorkommen, dass es bei 99% hängt, siehe Problembehandlung; (Beide <code>.zip</code>s können jetzt wieder gelöscht werden)`
  }, {
    title: `Ändere noch die <code>RAM</code>-Zuweisung in den Einstellungen vom <code>PrismLauncher</code>, in der Regel die Hälfte von deinem totalen Arbeitsspeicher ich empfehle mind. 8GB.`,
    subtitle: `<a href="https://i.imgur.com/xIgWoQM.png" target="_blank">Hilfe Bild</a>`
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