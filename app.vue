<template>
	<div>
		<NuxtPwaManifest />

		<NuxtLoadingIndicator />

		<NuxtLayout>
			<v-sheet class="pa-4 rounded">
				<NuxtPage />
			</v-sheet>
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
import { usePreferredDark } from '@vueuse/core'
import { useTheme, useDisplay } from 'vuetify'
const theme = useTheme()
const { mobile } = useDisplay()

onMounted(() => {
	if (process.env.NODE_ENV === 'production') {
		theme.global.name.value = usePreferredDark() ? 'dark' : 'light'
	}
});


useSeoMeta({
	title: 'Minecraft - JoniLieh',
	ogTitle: 'Minecraft - JoniLieh',
	description: 'Minecraft - JoniLieh',
	ogDescription: 'Minecraft - JoniLieh'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>