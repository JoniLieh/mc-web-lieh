import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useApiStore = defineStore('api', {
  state: () => ({
    countState: 0, name: 'Eduardo'
  }),
  getters: {
    count: (state) => state.countState,
    doubleCount: (state) => state.countState * 2
  },
  actions: {
    increment() {
      this.countState++
    }
  }
})

/**
 * There is also another possible syntax to define stores. 
 * Similar to the Vue Composition API's setup function
  In Setup Stores:

  ref()s become state properties
  computed()s become getters
  function()s become actions
 */