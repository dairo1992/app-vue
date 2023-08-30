import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritosStore = defineStore('favoritos', () => {
    const favoritos = ref([])
    const cantFavoritos = ref(favoritos.value.length)
    if (localStorage.getItem("favoritos")) {
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"))
        cantFavoritos.value = favoritos.value.length
    }

    const add = (pokemon) => {
        favoritos.value.push(pokemon)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))
        cantFavoritos.value++
    }
    const remove = (id) => {
        favoritos.value = favoritos.value.filter(e => e.id != id)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))
        cantFavoritos.value--
    }

    const findPokemon = name => favoritos.value.find(e => e.name === name)

    return { favoritos, add, remove, cantFavoritos, findPokemon }
})