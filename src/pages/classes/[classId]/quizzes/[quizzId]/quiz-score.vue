<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
</script>

<template>
  <div class="quiz-score flex gap-[4rem]">
    <img src="/quiz-completed.png" alt="" class="w-[50%]">

    <div class="text-center flex flex-col gap-6 items-center justify-center">
      <p class="text-5xl font-semibold">
        Completed Quiz 01
      </p>
      <p class="text-3xl font-semibold">
        Your Score
      </p>
      <p class="text-6xl text-[var(--n-color-primary-400)] font-bold">
        87%
      </p>
      <p class="text-xl font-semibold">
        Your Rank is <span class="text-2xl text-[var(--n-color-primary-400)]">345</span>
      </p>
      <NButton class="flex justify-end">
        Review Answers
      </NButton>
    </div>
  </div>
</template>
