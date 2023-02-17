<script setup lang="ts">
  withDefaults(defineProps<{
    source?: 'bilibili' | 'youtube'
  }>(), {
    source: 'bilibili'
  })
</script>
<template>
  <iframe />
</template>
<style scoped>
  
</style>