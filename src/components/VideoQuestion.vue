<script setup lang="ts">
import type VideoQuestionDetails from '~types'

interface VideoQuestionProps {
  details: VideoQuestionDetails
}

defineProps<VideoQuestionProps>()
</script>

<template>
  <div class="flex gap-4 my-4">
    <img :src="details.userProfile" alt="" class="user-profile">
    <div class="flex gap-4 items-center">
      <p class="font-semibold">
        {{ details.studentName }}
      </p>
      <p class="text-gray-400">
        {{ details.time }}
      </p>
    </div>
  </div>
  <p>{{ details.question }}</p>
</template>

<style>
.user-profile{
        width: 45px;
        height: 45px;
        aspect-ratio: 1;
        border-radius: 50%;
    }
</style>
