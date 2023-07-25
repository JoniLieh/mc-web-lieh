<template>
  <div>
    <slot />
    
    <h4 class="text-h4 mb-4 text-error">
      Folgendes gilt nur für die Minecraft Java-Edition und Windows!
    </h4>

    <v-list-subheader class="font-italic">
      Minecraft-Ordner befindet sich unter:&nbsp;
      <a @click="copy('%appdata%\\.minecraft')" role="button">
        %appdata%\.minecraft
        <v-icon color="primary" end small>mdi-content-copy</v-icon>
      </a>
    </v-list-subheader>
    <v-list-subheader class="font-italic">
      Für einfache Installation: Mods lassen sich auch einfach mit einem Mods-Client zB.:
      <a class="mx-1" href="https://multimc.org/" target="_blank">MultiMC</a>(empfohlen), <a class="mx-1" href="https://www.curseforge.com/download/app/" target="_blank">CurseForge</a>, ...
      installieren
    </v-list-subheader>

    <section v-for="({ title, infos, tasks, subtitle }, index) in extraItems" :key="index" class="mt-6">
      <h2 class="text-h5 text-primary">
        <a :id="title.toLowerCase()" :href="'#'+title.toLowerCase()" class="text-decoration-none text-primary" v-text="title" />
      </h2>

      <v-alert v-if="infos.length" class="my-2" border="start" type="info" density="compact" variant="tonal" prominent>
        <ul>
          <li v-for="(info, index2) in infos" :key="index2" class="font-italic" v-html="info" />
        </ul>
      </v-alert>

      <h2 v-if="subtitle" class="text-h6 mb-2" v-html="subtitle" />

      <ol>
        <li v-for="(task, index2) in tasks" :key="index2" v-html="task" />
      </ol>
    </section>
  </div>
</template>

* minecraft version
* Karte aktualisiert sich alle 24h

<script setup>
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()
</script>

<script type="ts">
export default {
  name: "ExtrasComponent",

  data() {
    return {
      extraItems: [
        {
          title: "Texturenpaket-Installation",
          type: "resourcepack",
          infos: [
            '<span class="text-error">Verringert die Bildrate (FPS) im Spiel!</span>',
            "Veränderte Texturen/Schriftarten",
            "Höhere Auflösungen verfügbar",
          ],
          subtitle:
            "Empfohlen: Optifine (ohne kommt es u.U. zu Anzeigefehlern bei Texturenpaketen)",
          tasks: [
            `Gewünschtes Resource Pack herunterladen<br/>
          <b>Empfehlung</b> Allgemein:&nbsp;<a href="https://bdcraft.net/downloads/vanillabdcraft-minecraft//" target="_blank">VanillaBDcraft</a> 32x - 512x<br/>
          <b>Empfehlung</b> für gute PCs:&nbsp;<a href="https://www.chromahills.com/" target="_blank">Chroma Hills</a> 128x<br/>
          <b>Empfehlung</b> für schlechte PCs:&nbsp;<a href="https://faithful.team/" target="_blank">Faithful</a> 32x
          `,
            `
          Die heruntergeladene Datei unter <a @click="copyText('%appdata%\\.minecraft\\resourcepacks')">%appdata%\\.minecraft\\resourcepacks</a> ablegen
          (Oder unter Minecraft-Einstellungen&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Resource Packs&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Open Resource Pack Folder)
          `,
            'Unter Minecraft-Einstellungen&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Resource Packs, das Resource Pack auswählen',
          ]
        },
        {
          title: "Shader Schnellinstallation ",
          infos: [
            //'<span class="success--text">Da Optifine auf der 1.19 derzeit noch keinen Shader unterstützt, hier eine Alternative</span>'
          ],
          subtitle:
            "Hier wird auf Iris anstatt Optifine gesetzt<small>(Ansonsten einfach OptiFine anstatt Iris installieren)</small>",
          tasks: [
            `<a href="https://irisshaders.net/download" target="_blank">Iris Shaders</a> → "Universelle Jar herunterladen"`,
            `<a href="https://bitslablab.com/bslshaders/#download" target="_blank">BSL Shaders</a> → "Download BSL v8.x.x"`,
            `BSL Shaders-Datei in <code>.minecraft\\shaderpacks</code> legen`,
            `Starte Minecraft`,
            `Öffne <code>Options, Video Settings, Shaders</code><small>(Für Iris)</small>`,
            `Lege "BSL Shaders" fest`
          ]
        },{
          title: `OptiFine-Installation`,
          type: "optifine",
          subtitle: `(Alternative: <a href="https://irisshaders.net/download" target="_blank">Iris Shaders</a>)`,
          infos: [
            "Höhere Bildrate (FPS) im Spiel",
            "Feinere Grafikeinstellungen",
            "Mit der C-Taste zoomen(Taste kann im Menü geändert werden)",
          ],
          tasks: [
            'Neueste Version von <a href="https://www.optifine.net/downloads" target="_blank">OptiFine herunterladen</a> (Vorsicht bei Download, keine falschen Links anklicken, falls verfügbar oben rechts "SKIP" ODER einfach "Mirror" herunterladen)',
            "<a>.jar</a> ausführen und im Minecraft-Pfad(muss normalerweise nicht geändert werden) installieren",
          ],
        }, {
          title: "Shader-Installation",
          type: "shader",
          infos: [
            '<span class="text-error">Verringert die Bildrate (FPS) im Spiel!</span>',
            "Optische Aufwertung durch dynamische Schatten",
            "Unterschiedlichste Shader möglich",
            'Es gibt auch bereits&nbsp;<a href="https://minecraft.fandom.com/de/wiki/Shader" target="_blank">nativ integrierte Shader</a>',
          ],
          subtitle: "Voraussetzung: Optifine oder Iris",
          tasks: [
            'Gewünschtes&nbsp;<a href="https://shaders.fandom.com/wiki/Shader_Packs" target="_blank">Shaderpack herunterladen</a> (<b>Empfehlung</b>: <a href="https://bitslablab.com/bslshaders/#download" target="_blank">BSL Shaders</a> oder <a href="https://www.sonicether.com/seus/" target="_blank">SEUS Renewed</a>; auch hier wieder aufpassen, auf keine falschen Links klicken)',
            `Die heruntergeladene Datei unter <a @click="copyText('%appdata%\\.minecraft\\shaderpacks')">
            %appdata%\\.minecraft\\shaderpacks
          </a> ablegen<br/>(Oder unter Minecraft-Einstellungen&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Video Settings&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Shaders&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Open shader packs folder)`,
            'Unter Minecraft-Einstellungen&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Video Settings&nbsp;<i class="v-icon mdi mdi-arrow-right" style="font-size: 16px;"></i>&nbsp;Shaders, den Shader auswählen',
          ],
        }, 
      ]
    }
  }
}
</script>
