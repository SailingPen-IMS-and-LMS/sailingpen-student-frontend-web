<script setup lang="ts">
import type { QuizDetails } from '~/types'

interface QuizProps {
  details: QuizDetails
}

defineProps<QuizProps>()
</script>

<template>
  <div class="bg-[var(--bg-primary)] p-[1rem] shadow-sm rounded-xl my-4">
    <div class="flex gap-4 items-center justify-center">
      <mdi-head-question class="text-lg text-red-600" />
      <p class="font-semibold text-xl my-4">
        Quiz - {{ details.quizNumber }} - {{ details.name }}
      </p>
    </div>
    <p class="text-justify">
      {{ details.description }}
    </p>
  </div>
</template>
