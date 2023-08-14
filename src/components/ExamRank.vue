<script setup lang="ts">
import type { ExamFirstPlacesDetails } from '~/types'

interface ExamRankingProps {
  details: ExamFirstPlacesDetails
  color: string
}

defineProps<ExamRankingProps>()
</script>

<template>
  <div class="flex flex-col items-center justify-center relative">
    <img v-if="details.place === 1" src="/icons/crown.png" alt="crown-icon" class="absolute -top-13 right-[50%]" style="transform: scale(0.8) translateX(50%) rotate(-3deg); ">
    <img :src="details.image" alt="" class="w-[70px] h-[70px] my-4 border-solid" style="border-radius: 50%; aspect-ratio: 1; border:4px solid var(--n-color-primary-400)">
    <p
      class="font-semibold text-4xl text-center" :style="{
        color,
      }"
    >
      {{ details.place }}
    </p>
    <p class="font-semibold text-xl text-center">
      {{ details.name }}
    </p>
    <p class="text-center">
      {{ details.school }}
    </p>
  </div>
</template>
