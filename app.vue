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
	import { useTheme } from 'vuetify'
	const theme = useTheme()

	onMounted(() => {
		theme.global.name.value = usePreferredDark() ? 'dark' : 'light'
	});
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