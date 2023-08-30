import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const contador = ref(0)
    const increment = () => contador.value++
    const decrement = () => contador.value--

    return { contador, increment, decrement }
})
