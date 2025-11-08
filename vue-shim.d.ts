import VueRouter, { Route } from 'vue-router'

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}

// https://github.com/nuxt/nuxt/releases/tag/v3.13.0
// TODO periodically check if this is still needed, as libraries may update their types
import type {
  ComponentCustomOptions as _ComponentCustomOptions,
  ComponentCustomProperties as _ComponentCustomProperties,
} from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends _ComponentCustomProperties {}
  interface ComponentCustomOptions extends _ComponentCustomOptions {}
}