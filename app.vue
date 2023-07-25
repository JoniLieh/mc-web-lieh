<template>
	<div>
		<NuxtLoadingIndicator />
		
		<NuxtLayout>
			<NuxtPage />
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