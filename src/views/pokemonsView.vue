<script setup>
import { useGetData } from '@/composables/getData'
import { RouterLink } from 'vue-router'

const { data, getData, loading, error } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")


</script>
<template>
    <div class="container">
        <h1>Pokemons</h1>
        <p v-if="loading">cargando informacion..</p>
        <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
        <div v-if="data">
            <ul class="list-group">
                <li class="list-group-item" v-for="(pokemon, index) of data.results" :key="index">
                    <RouterLink :to="`/pokemons/${pokemon.name}`">{{
                        pokemon.name }}</RouterLink>

                </li>
            </ul>
            <div class="mt-2">
                <button class="btn btn-warning me-2" @click="getData(data.previous)"
                    :disabled="!data.previous">Anterior</button>
                <button class="btn btn-primary" @click="getData(data.next)">Siguiente</button>
            </div>
        </div>
    </div>
</template>