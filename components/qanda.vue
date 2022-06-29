<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <slot />
    <v-expansion-panels multiple popout flat>
      <v-expansion-panel
        v-for="(item,i) in qanda"
        :key="i"
      >
        <v-expansion-panel-header class="title" expand-icon="mdi-help" disable-icon-rotate>
          {{ item.question }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-alert
            color="info"
            border="left"
            text
          >
            <div v-html="item.answer" />
          </v-alert>
        </v-expansion-panel-content>
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
          answer: 'Ja, schaut im Regel-Abschnitt nach'
        }, {
          question: 'Was ist eine Whitelist?',
          answer: 'Der Minecraft-Server hat eingeschränkten Zugriff, nur Leute, auf der Liste dürfen auch auf den Server.'
        }, {
          question: 'Was ist die Java- und was die Bedrock-Version?',
          answer: `
          Die Java-Version ist das Original-Minecraft, dort können kostenlos Modifikationen und Texturenpakete installiert werden.
          <br/>
          Die Bedrock-Version neu entwickelt worden und hat eine bessere Leistung.
          <br/>
          Normalerweise kann die Bedrock-Version nur auf Bedrock-Servern spielen, hier kann Sie aber durch Plugins trotzdem auf den Server.
          `
        }
      ]
    }
  }
}
</script>
