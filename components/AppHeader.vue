<template>
	<v-app-bar fixed app border>
		<v-toolbar-title>JoniLieh-MC-Server</v-toolbar-title>

		<v-btn v-if="!mobile" to="/" nuxt prepend-icon="mdi-sword" variant="text" :stacked="mobile">
			Vanilla
		</v-btn>
		<v-btn v-if="!mobile" to="/modded" nuxt prepend-icon="mdi-puzzle" variant="text" color="accent" :stacked="mobile">
			Modded
		</v-btn>

		<v-spacer />
		<v-img src="/favicon.ico" class="round-borders" contain height="auto" max-height="48px" max-width="48px" />

		<v-btn @click="toggleLightDarkMode()" icon="mdi-theme-light-dark"></v-btn>
	</v-app-bar>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { useTheme } from 'vuetify'

const { mobile } = useDisplay()

const theme = useTheme()

function toggleLightDarkMode() {
	switch (theme.global.name.value) {
		case 'dark':
			theme.global.name.value = 'light'
			break;

		case 'light':
			theme.global.name.value = 'dark'
			break;
	}
}
</script>
