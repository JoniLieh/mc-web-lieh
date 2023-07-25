<template>
	<v-bottom-navigation v-if="mobile">
	      <v-btn to="/" nuxt prepend-icon="mdi-sword" variant="text" color="primary" :stacked="mobile">
	        Vanilla
	      </v-btn>
	      <v-btn to="/modded" nuxt prepend-icon="mdi-puzzle" variant="text" color="accent" :stacked="mobile">
	        Modded
	      </v-btn>
	    </v-bottom-navigation>
</template>

<script setup lang="ts">
defineProps<{ 
	mobile: boolean;
}>()
</script>
