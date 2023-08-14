<script setup lang="ts">
import type { OtherVideosDetails } from '~/types'

interface OtherVideoProps {
  details: OtherVideosDetails
}

defineProps<OtherVideoProps>()
</script>

<template>
  <div class="flex gap-2 my-3 items-center">
    <img :src="details.image" alt="" class="w-50 h-25 rounded-xl">
    <div>
      <p class="font-semibold">
        {{ details.videoName }}
      </p>
      <p>{{ details.date }}</p>
      <p>{{ details.time }}</p>
    </div>
  </div>
</template>
