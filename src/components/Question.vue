<script setup lang="ts">
import { NButton, NCheckbox } from '@nethren-ui/vue'
import type { Questions } from '~/types'

interface QuestionProps {
  details: Questions
}

defineProps<QuestionProps>()

const option1 = ref(false)
const option2 = ref(false)
const option3 = ref(false)
const option4 = ref(false)
</script>

<template>
  <div class="bg-[var(--bg-primary)] p-4 rounded-xl shadow-md flex items-start gap-8 w-[100%]">
    <div class="bg-white p-4 rounded-lg w-[22%]">
      <p class="font-semibold my-4">
        Question <span class="font-semibold text-2xl">{{ details.questionNumber }}</span>
      </p>
      <p>
        Not yet answered
      </p>
      <p class="my-4">
        Marked out of <span>{{ details.marks }}</span>
      </p>
      <div class="flex gap-2 items-center">
        <p>Flag Question </p>
        <prime-flag-fill />
      </div>
    </div>

    <div class="w-[100%] mt-10  px-[4rem]">
      <p class="font-semibold mb-10">
        {{ details.question }}
      </p>

      <div class="flex gap-2 my-4 pl-6">
        <NCheckbox v-model="option1" />
        <div class="flex gap-4">
          <p>{{ details.answerNumber1 }}</p>
          <p>{{ details.answer1 }}</p>
        </div>
      </div>

      <div class="flex gap-2 my-4 pl-6">
        <NCheckbox v-model="option2" />
        <div class="flex gap-4">
          <p>{{ details.answerNumber2 }}</p>
          <p>{{ details.answer2 }}</p>
        </div>
      </div>

      <div class="flex gap-2 my-4 pl-6">
        <NCheckbox v-model="option3" />
        <div class="flex gap-4">
          <p>{{ details.answerNumber3 }}</p>
          <p>{{ details.answer3 }}</p>
        </div>
      </div>

      <div class="flex gap-2 my-4 pl-6">
        <NCheckbox v-model="option4" />
        <div class="flex gap-4">
          <p>{{ details.answerNumber4 }}</p>
          <p>{{ details.answer4 }}</p>
        </div>
      </div>
      <div class="flex justify-end my-6">
        <NButton>Next Page</NButton>
      </div>
    </div>
  </div>
</template>
