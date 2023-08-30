<script setup>
import { useCounterStore } from '@/store/counter.js'
import { storeToRefs } from "pinia";

const useCounter = useCounterStore()
const { contador} = storeToRefs(useCounter)
const { increment, decrement } = useCounter
</script>

<template>
  <h1>Home</h1>
  <div class="container">
    <p>{{ contador }}</p>
    <div>
      <button class="btn btn-success me-2" @click="increment">+1</button>
      <button class="btn btn-success" @click="decrement">-1</button>
    </div>
  </div>
</template>
