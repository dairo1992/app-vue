<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from "pinia";
import { useFavoritosStore } from '@/store/favoritos.js'

const useFavoritos = useFavoritosStore()

const { cantFavoritos } = storeToRefs(useFavoritos)
</script>

<template>
  <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        PokeApi
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="btn btn-outline-primary me-2" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="btn btn-outline-primary" to="/pokemons">Pokemons</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav me-end mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="btn btn-outline-warning me-2 position-relative" to="/favoritos">Favoritos<span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">
                {{ cantFavoritos }}
                <span class="visually-hidden">unread messages</span>
              </span></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container text-center">
    <RouterView />
  </div>

  <!-- </div> -->
</template>
