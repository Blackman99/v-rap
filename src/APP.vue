<script setup lang="ts">
import { ref } from 'vue'
import Rap from './Rap.vue'
import vRap from './v-rap'

const source = ref< 'bilibili' | 'youtube'>('bilibili')
</script>

<template>
  <h3>
    Select source:
  </h3>
  <label>
    Bilibili
    <input v-model="source" type="radio" value="bilibili">
  </label>
  <label>
    Youtube
    <input v-model="source" type="radio" value="youtube">
  </label>

  <h3>
    Rap component
  </h3>

  <Rap :source="source" class="container" />

  <h3>
    v-rap directive
  </h3>
  <div v-rap="{ source }" class="container" />
</template>

<style>
.container {
  display: block;
  width: 320px;
}
</style>
