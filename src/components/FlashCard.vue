<script setup lang="ts">
import type { FlashcardDetails } from '~/types'

interface FlashcardProps {
  details: FlashcardDetails
}

defineProps<FlashcardProps>()
</script>

<template>
  <div class="bg-[var(--bg-primary)] mb-6 shadow-md">
    <div
      class="mt-0.5 flex flex-col items-center justify-center gap-4 text-white aspect-[7/6]"
      style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);" :style="{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${details.image})`,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0.75rem 0.75rem 0 0',
      }
      "
    >
      <p class="font-semibold text-lg text-white text-center items-center justify-center">
        {{ details.name }}
      </p>
    </div>
    <p class="text-justify p-4">
      {{ details.description }}
    </p>
  </div>
</template>
