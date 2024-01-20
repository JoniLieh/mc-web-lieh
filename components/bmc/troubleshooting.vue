<template>
  <div>
    <h3 class="text-sm-h2 text-h5">
      Problembehandlung
    </h3>
    <br>

    <section v-for="(item, index) in errorItems" :key="index" class="mb-4">
      <h5 class="text-h5 d-flex">
        <v-icon color="error" size="32" start>mdi-frequently-asked-questions</v-icon>
        <span v-html="item.title"></span>
      </h5>
      <v-divider class="my-2"></v-divider>
      <ul class="pl-11">
        <li v-for="(step, stepIndex) in item.steps" :key="stepIndex" v-html="step"></li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
const errorItems = [
  {
    title: `Java-Probleme`,
    steps: [
      `JDK 17 installiert?`,
      `In den PrismLauncher-Einstellungen kann man Java durch Auto-Erkennung die installierten Java-Versionen auswählen <a href="https://i.imgur.com/NMdh6zZ.png" target="_blank">Hilfe Bild</a>`,
      `Haben Sie versucht das Gerät aus- und einzuschalten? (Starte den PC nach der Java-Installation neu)`
    ]
  },{
    title: `Das Spiel ruckelt / schlechte FPS`,
    steps: [
      `Wechsle zu einem Low-Shader (Hotkey: <code>O</code>)`,
      `Stelle die Sichtweite / Grafik herunter`,
      `Erhöhe den RAM für die Minecraft-Instanz im PrismLauncher`,
      `Folge dem Performance Guide`
    ]
  },{
    title: `Mods sind nicht mehr aktuell / unterschiedliche Mods`,
    steps: [
      `Bezieht das Modpack erneut und installiert es wie beschrieben`
    ]
  },{
    title: `Installation hängt bei 99%`,
    steps: [
      `Starte den Download neu, ggfls. Launcher auch`
    ]
  }
]
</script>

<style>

</style>