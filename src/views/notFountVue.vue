<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const back = () => {
    router.push('/')
}
</script>
<template>
    <h1>Pagina no encontrada</h1>
    <button class="btn btn-outline-warning" @click="back">Volver</button>
</template>