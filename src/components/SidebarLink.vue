<script setup lang="ts">
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  to: string
  text: string
  isSidebarOpen: boolean
}>()

const { to, text, isSidebarOpen } = toRefs(props)
</script>

<template>
  <RouterLink :to="to" class="flex items-center gap-4 px-4 py-2">
    <slot name="icon" />
    {{ isSidebarOpen ? text : "" }}
  </RouterLink>
</template>

<style lang="scss" scoped>
  a{
    transition: all 200ms;
    border-radius: 8px;

    &:hover{
    background-color: var(--n-color-primary-200-transparent);
  }

    &:active{
      background-color: var(--n-color-primary-600-transparent);
    }
  }
</style>
