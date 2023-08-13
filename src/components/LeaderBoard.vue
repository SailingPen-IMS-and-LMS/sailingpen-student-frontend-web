<script setup lang="ts">
import type { ExamLeaderBoardDetails } from '~/types'

interface ExamLeaderBoardProps {
  details: ExamLeaderBoardDetails
}

defineProps<ExamLeaderBoardProps>()
</script>

<template>
  <div class="flex text-left gap-[6rem]">
    <p class="font-semibold w-[3rem] text-center">
      {{ details.place }}
    </p>
    <p class="w-[10rem] text-center">
      {{ details.indexNumber }}
    </p>
    <div class="flex gap-4 items-center w-[20rem]">
      <img :src="details.profilePicture" class="w-[40px] h-[40px]" alt="" style="border-radius: 50%; aspect-ratio: 1;">
      <p class="w-15rem">
        {{ details.name }}
      </p>
    </div>

    <p class="w-[25rem] text-left">
      {{ details.school }}
    </p>
    <p>{{ details.marks }}</p>
  </div>
  <hr class="my-1">
</template>
