<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData'
import { useFavoritosStore } from '@/store/favoritos.js'


const useFavoritos = useFavoritosStore()
const { add, findPokemon } = useFavoritos

const { data, getData, loading, error } = useGetData()
const route = useRoute()
const router = useRouter()
const back = () => {
    router.push('/pokemons')
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>
<template>
    <p v-if="loading">cargando informacion..</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div class="container" v-if="data">
        <img :src="data.sprites?.front_default" class="img-fluid" alt="...">
        <h1>Pokemon name: {{ data.name }}</h1>
        <button class="btn btn-success mb-2" :disabled="findPokemon(data.name)" @click="add(data)">Añadir a favoritos</button>
    </div>

    <div class="alert alert-danger" role="alert" v-else="!data">
        <h1>No existe este pokemon
        </h1>
    </div>
    <button class="btn btn-primary" @click="back">Volver</button>
</template>