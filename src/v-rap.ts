/* eslint-disable vue/one-component-per-file */
import { type Directive, createApp } from 'vue'
import Rap from './Rap.vue'

const vRap: Directive = {
  mounted(el, { value = {} }) {
    const { ratio = 16 / 9, source = 'bilibili' } = value
    createApp(Rap, { ratio, source }).mount(el)
  },
  updated(el, { value = {} }) {
    const { ratio = 16 / 9, source = 'bilibili' } = value
    createApp(Rap, { ratio, source }).mount(el)
  },
}

export default vRap
