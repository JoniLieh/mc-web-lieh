<template>
  <v-alert title="Installation" icon="mdi-wrench" type="info" border="start" variant="tonal">
    <v-list lines="two" class="installation-list-container" rounded>
      <v-list-item v-for="(item, index) in installationItems" :key="index" :class="mobile ? 'px-0' : ''">
        <template v-slot:prepend>
          <span :class="mobile ? 'mr-1' : 'mr-5'">
            {{ index + 1 }}.
          </span>
        </template>
        <v-list-item-title v-html="item.title" class="installation-text"></v-list-item-title>
        <v-list-item-subtitle v-show="!!item.subtitle" v-html="item.subtitle"
          class="installation-text"></v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-alert>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';


const { mobile } = useDisplay()

interface installationItem {
  title: string;
  subtitle?: string;
}

const installationItems: installationItem[] = [
  {
    title: "Stelle sicher, dass du einen Minecraft-Account besitzt und er mit deinem Microsoft-Account verknüpft ist.",
    subtitle: `(Hilfe dazu findest du auch <a href="/#installation">hier</a>)`
  }, {
    title: "Habe <code>Java JDK 21</code> installiert",
    subtitle: `Findest du auch unter Downloads`
  }, {
    title: "Downloade den Client",
  }, {
    title: "<i><b>(Portable)</b></i> Entpacke <code>PrismLauncher... .zip</code> wo du es wieder findest (zB. auf dem Desktop)",
    subtitle: `(Der <code>Windows-Explorer</code> kann mittlerweile Packen und Entpacken)`
  }, {
    title: "<i><b>(Portable)</b></i> Starte <code>prismlauncher.exe</code> aus dem entpackten Ordner",
    subtitle: `(Hiermit wirst du dein Minecraft starten, also kannst du auch eine Verknüpfung auf deinen Desktop dafür einrichten)`
  }, {
    title: "Gehe den Installationsassistenten vom <code>PrismLauncher</code> durch."
  }, {
    title: "Verknüpfe deinen Minecraft-Account mit dem <code>PrismLauncher</code> (oben rechts im Launcher)"
  }, {
    title: `Füge nun das Modpack hinzu, indem du oben links auf <code>"Instanz hinzufügen"</code> gehst, danach auf <code>"CurseForge"</code> und anschließend suchst du nach "All the Mods 10" und klickst auf <code>"OK"</code>`,
    subtitle: `Beim Download können voraussichtlich nicht alle Mods heruntergeladen werden. Wenn der Prozess fertig ist, gehe auf "Öffne Fehlende" <a href="https://i.imgur.com/uB4h16J.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: `Ändere noch die <code>RAM</code>-Zuweisung in den Einstellungen vom <code>PrismLauncher</code>, in der Regel die Hälfte von deinem totalen Arbeitsspeicher ich empfehle mind. 8GB.`,
    subtitle: `<a href="https://i.imgur.com/xIgWoQM.png" target="_blank">Hilfe Bild</a>`
  }, {
    title: `Starte nun das Modpack indem du auf die hinzugefügt Instanz doppelklickst oder durch Auswahl und dann an der Seite auf <code>"Starten"</code>`
  }, {
    title: `Ggf. änderst du noch Maus-, Tastatur- & Grafikeinstellungen in Minecraft, <b>F11 für Vollbildmodus</b>`
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