<script setup>
import { ref } from 'vue'
import { cells } from './store.js'

const props = defineProps({
  c: Number,
  r: Number
})

const editing = ref(false)

function update(e) {
  editing.value = false
  cells[props.c][props.r] = e.target.value.trim()
}
</script>

<template>
  <div class="cell" :title="cells[c][r]" @click="editing = true">
    <input
      v-if="editing"
      :value="cells[c][r]"
      @change="update"
      @blur="update"
      @vue:mounted="({ el }) => el.focus()"
    >
    <span v-else>{{ cells[c][r] }}</span>
  </div>
</template>

<style>
.cell, .cell input {
  height: 2em;
  line-height: 2em;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ;

}
</style>

