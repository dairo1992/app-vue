<script setup>
import { storeToRefs } from "pinia";
import { useFavoritosStore } from '@/store/favoritos.js'

const useFavoritos = useFavoritosStore()
const { remove } = useFavoritos
const { favoritos } = storeToRefs(useFavoritos)
</script>

<template>
    <h1>Favoritos</h1>
    <h3 v-if="favoritos.length == 0">No has agregado ningun favorito</h3>
    <div v-if="favoritos">
        <ul class="list-group">
            <li class="list-group-item" v-for="(pokemon, index) of favoritos" :key="index">
                <RouterLink :to="`/pokemons/${pokemon.name}`">
                    <div>
                        {{ pokemon.name }}
                    </div>
                </RouterLink>
                <div>
                    <button class="btn btn-sm btn-outline-danger" @click="remove(pokemon.id)">Eliminar</button>
                </div>

            </li>
        </ul>
        <div class="mt-2">

        </div>
    </div>
</template>