<script setup lang="ts">
import { ref } from 'vue'
import type { AccordionDetails } from '~/types'

defineProps<AccordionDetailsProps>()

interface AccordionDetailsProps {
  details: AccordionDetails
}

const isOpen = ref(false)
</script>

<template>
  <div class="border-2 p-2 rounded" @click="isOpen = !isOpen">
    <div class="accordion-title bg-[var(--bg-primary)] p-4 rounded-lg font-bold text-xl cursor-pointer">
      {{ details.title }}
    </div>

    <div class="mt-4 border-2 p-2 rounded" :class="isOpen ? 'block' : 'hidden'">
      <slot />
    </div>
  </div>
</template>
