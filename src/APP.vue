<script setup lang="ts">
import { ref } from 'vue'
import Rap from './Rap.vue'
import vRap from './v-rap'

const source = ref< 'bilibili' | 'youtube'>('bilibili')
</script>

<template>
  <div class="body">
    <div class="cover-wrapper">
      <img src="/rapper-hand-draw.png" class="cover">
    </div>
    <h3>
      Select source:
    </h3>
    <div class="options">
      <label>
        Bilibili
        <input v-model="source" type="radio" value="bilibili">
      </label>
      <label>
        Youtube
        <input v-model="source" type="radio" value="youtube">
      </label>
    </div>

    <h3>
      Rap component
    </h3>

    <Rap :source="source" class="container" />

    <h3>
      v-rap directive
    </h3>
    <div v-rap="{ source }" class="container" />
  </div>
</template>

<style scoped>
.cover-wrapper {
  text-align: center;
}
.cover {
  height: 30vh;
}
.body {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
.container {
  display: block;
}
label {
  font-weight: bold;
}
.options {
  display: flex;
  justify-content: space-between;
}
</style>
