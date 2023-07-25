<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
         <v-row justify="center" align="center">
           <v-col cols="auto" class="text-center">
             <v-alert type="error" :title="String(error?.statusCode)" :text="error?.message" variant="tonal" class="elevation-1"></v-alert>
             <br>
             <v-btn @click="handleError" color="primary">Go Back</v-btn>
           </v-col>
         </v-row>
          
      </v-container>
    </v-main>
  </v-app>
</template>



<script lang="ts" setup>
interface NuxtError {
  message: string,
  statusCode: number,
  statusMessage: string
}

const props = defineProps({
  error: Object
})

// @ts-ignore
const handleError = () => clearError({ redirect: '/' })
</script>