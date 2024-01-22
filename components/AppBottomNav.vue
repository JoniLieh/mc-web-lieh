<template>
	<v-bottom-navigation v-show="mobile">
		<v-btn to="/" nuxt prepend-icon="mdi-sword" variant="text" color="primary" stacked>
			Vanilla
		</v-btn>
		<v-btn to="/bmc" nuxt prepend-icon="mdi-creation" variant="text" color="accent" stacked>
			BetterMC
		</v-btn>
		<v-btn to="/modded" nuxt prepend-icon="mdi-puzzle" variant="text" color="accent" stacked>
			Modded
		</v-btn>
	</v-bottom-navigation>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

</script>
