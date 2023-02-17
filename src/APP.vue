<script setup lang="ts">
  import { ref } from 'vue';
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
    <input type="radio" value="bilibili" v-model="source" />
  </label>
  <label>
    Youtube
    <input type="radio" value="youtube" v-model="source" />
  </label>

  <h3>
    Rap component
  </h3>

  <Rap :source="source" class="container" />

  <h3>
    v-rap directive
  </h3>
  <div v-rap="{ source }" class="container">
    
  </div>
</template>

<style>
.container {
  display: block;
  width: 320px;
}
</style>