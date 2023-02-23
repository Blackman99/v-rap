<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { resolveSource } from './source'

const props = withDefaults(defineProps<{
  source?: 'bilibili' | 'youtube'
  ratio?: number
}>(), {
  source: 'bilibili',
  ratio: 16 / 9,
})

const iframeDom = ref<HTMLIFrameElement | null>(null)

const src = computed(() => resolveSource(props.source))

const height = ref('auto')

const computeHeight = () => {
  const width = iframeDom.value?.offsetWidth || ''
  if (width)
    height.value = `${width / props.ratio}px`
}

onMounted(() => {
  computeHeight()

  const observe = new ResizeObserver(() => {
    computeHeight()
  })

  if (iframeDom.value)
    observe.observe(iframeDom.value)
})
</script>

<template>
  <iframe
    ref="iframeDom"
    :src="src"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
    width="100%"
    :height="height"
  />
</template>
