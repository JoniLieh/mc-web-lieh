<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <slot />
    <v-expansion-panels multiple variant="popout">
      <v-expansion-panel
        v-for="(item,i) in qanda"
        :key="i"
      >
        <v-expansion-panel-title class="text-h6" expand-icon="mdi-help" disable-icon-rotate>
          <template v-slot:actions>
            <v-icon>
              mdi-help
            </v-icon>
          </template>
          {{ item.question }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-alert
            color="info"
            border="start"
            variant="tonal" 
          >
            <div v-html="item.answer" />
          </v-alert>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script type="ts">
export default {
  name: 'QuestionsAndAnswersComponent',

  data () {
    return {
      qanda: [
        {
          question: 'Was ist Minecraft?',
          answer: 'Es ist ein Spiel: "Erkunde deine eigene, einzigartige Welt, überstehe die Nacht und erschaffe alles, was du dir vorstellen kannst!"'
        }, {
          question: 'Woher bekomme ich Minecraft?',
          answer: 'Minecraft kannst unter folgendem Link kaufen: <a href="https://www.minecraft.net/de-de/get-minecraft">https://www.minecraft.net/de-de/get-minecraft</a>'
        }, {
          question: 'Gibt es Regeln?',
          answer: 'Ja, bitte schau im Regel-Abschnitt nach'
        }, {
          question: 'Was ist eine Whitelist?',
          answer: 'Der Minecraft-Server hat eingeschränkten Zugriff, nur Leute auf der Liste dürfen auch auf den Server.'
        }, {
          question: 'Was ist die Java-, was die Bedrock- und was die Pocket-Version?',
          answer: `
          Die Java-Version ist das Original-Minecraft, dort können kostenlos Modifikationen und Texturenpakete installiert werden.
          <br/>
          Die Bedrock-Version ist neu entwickelt worden und hat eine bessere Leistung.
          <br/>
          Die Pocket-Version(PE, Pocket-Edition) ist extra für mobile Endgeräte entwickelt worden und hat somit Nachteile, aber passt in die Hosentasche.
          <br/>
          <br/>
          Normalerweise kann die Bedrock/Pocket-Version nur auf Bedrock-Servern spielen, hier kann Sie aber durch Plugins trotzdem auf den Server.
          `
        }, {
          question: 'Welche Version hat mein Gerät?',
          answer: `
          PC: Java & Bedrock
          <br/>
          Handy/Tablet: Pocket-Edtion
          <br/>
          Konsole: Pocket-Edition / Bedrock
          `
        }, {
          question: 'Ich habe einen Key, wo kann ich den aktivieren?',
          answer: `
          Hier kannst du deinen Key aktivieren und mit deinem Microsoft-Konto verknüpfen: <a href="https://www.minecraft.net/de-de/redeem">https://www.minecraft.net/de-de/redeem</a>
          `
        }, {
          question: 'Ich brauche eine bestimmte Java-Version, wo bekomme ich die?',
          answer: `
          Es ist wichtig, dass du die JDK-Version installiert hast.
          <br/>
          Wähle die gewünschte Version aus (höchstwahrscheinlich 21), das Betriebssystem (Windows, Linux, Mac) und anschließend den Installer.
          <br/>
          Hier kannst du die Java-Version herunterladen: <a href="https://www.oracle.com/de/java/technologies/downloads/">Java Download</a>
          <br/>
          <a target="_blank" href="https://i.imgur.com/KxrIBGY.png">Hilfe Bild</a>
          <br/>
          <b>Wichtig für PrismLauncher:</b> Wähle die neue Version im Launcher aus: "Einstellungen" -> "Java" -> "Auto-Erkennung" -> "&#10094;deine Version&#10095;" -> "OK"
          `
        }, {
          question: 'Mein Videotreiber ist veraltet, wo bekomme ich den Neusten?',
          answer: `
          Um zu sehen, welche Grafikkarte du hast, drücke die Tastenkombination "Windows-Taste + R" und gebe "dxdiag" ein und klicke auf "Anzeige". Alternativ: Im Geräte-Manager.
          <br/>
          Hier kannst du den neusten Treiber für deine Grafikkarte herunterladen: <a href="https://www.nvidia.com/de-de/geforce/drivers/">Nvidia GameReady</a>, <a href="https://www.amd.com/de/support/download/drivers.html">AMD</a>
          <br/>
          <a target="_blank" href="https://i.imgur.com/8p0Nsy6.png">Hilfe Bild</a>
          `
        }, {
          question: 'Wie importiere ich ein bestehendes Modpack / Minecraft-Installation?',
          answer: `
          1. Benutze den richtigen Launcher (z.B. PrismLauncher)
          <br/>
          2. oben links auf "Instanz hinzufügen" 
          <br/>
          3. "Importieren" 
          <br/>
          4. "Durchsuchen"
          <br/>
          5. navigiere zu der heruntergeladen Modpack.zip-Datei
          <br/>
          <a target="_blank" href="https://i.imgur.com/YTCyrMp.png">Hilfe Bild</a>
          `
        }, {
          question: 'Ich muss mich erneut anmelden im PrismLauncher',
          answer: `
          Oben rechts das Konto entfernen und erneut deinen Minecraft-Account mit dem Launcher verbinden.
          <br/>
          <a target="_blank" href="https://i.imgur.com/wpjuPt4.png">Hilfe Bild</a>
          `
        }
      ]
    }
  }
}
</script>
