## Introduction

A Vue3 implement of the rap video of the author of Vue.js

## Install

```sh
# via npm
npm install --save v-rap

# via yarn
yarn add v-rap

# via pnpm
pnpm install v-rap
```

## Rap component

```vue
<script setup>
  import { Rap } from 'v-rap'
</script>

<VRap source="bilibili" :ratio="16 / 9" />
```

## Rap directive

```vue
<script setup>
  import { vRap } from 'v-rap'
</script>

<div v-rap="{ source: 'bilibili', ratio: 16 / 9 }" />
```
## Rap component props & v-rap directive values

* `source`  
The play source. Can be `'bilibili'` or `'youtube'`.  
Default is `'bilibili'`
* `ratio`  
The `video` ratio. Default is `16 / 9`.  
The width of video container is 100%. So just set the width of parent container to change the width.  
And the height can be auto computed based on `ratio`.

## LICENSE

[MIT](./LICENSE)