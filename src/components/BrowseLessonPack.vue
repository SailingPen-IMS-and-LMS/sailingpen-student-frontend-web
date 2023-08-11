<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import type { BrowseLessonPacksDetails } from '~/types'

interface BrowseLessonPacksProps {
  details: BrowseLessonPacksDetails
}

defineProps<BrowseLessonPacksProps>()
</script>

<template>
  <div class="w-100 bg-[var(--bg-primary)] rounded-xl mb-6">
    <img :src="details.image" alt="" class="aspect-[21/9] w-full object-cover" style="border-radius: 0.75rem 0.75rem 0 0;">
    <p class="font-semibold mx-4 mt-4">
      {{ details.name }} - {{ details.month }}
    </p>
    <div class="flex justify-between">
      <p class="mx-4">
        Price: Rs. <span class="text-red-600 font-semibold text-xl">{{ details.price }}</span>
      </p>
      <div class="flex justify-end px-4 py-2">
        <NButton mode="text">
          View
        </NButton>
      </div>
    </div>
  </div>
</template>
