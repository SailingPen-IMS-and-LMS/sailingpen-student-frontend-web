<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { toRefs } from 'vue'
import type { LessonPack } from '~/types/api-types/lesson-packs-types'

interface BrowseLessonPacksProps {
  lessonPack: LessonPack
}

const props = defineProps<BrowseLessonPacksProps>()
const emit = defineEmits<{
  onDetailsSidebarOpen: []
}>()
const { lessonPack } = toRefs(props)
</script>

<template>
  <div class="w-100 bg-[var(--bg-primary)] rounded-xl mb-6 shadow-md">
    <img src="/lesson-pack-1.jpg" alt="" class="aspect-[21/9] w-full object-cover" style="border-radius: 0.75rem 0.75rem 0 0;">
    <p class="font-semibold mx-4 mt-4">
      {{ lessonPack.name }}
    </p>
    <div class="flex justify-between">
      <p class="mx-4">
        Price: Rs. <span class="text-red-600 font-semibold text-xl">{{ lessonPack.price }}</span>
      </p>
      <div class="flex justify-end px-4 py-2">
        <NButton mode="text" @click="emit('onDetailsSidebarOpen')">
          View
        </NButton>
      </div>
    </div>
  </div>
</template>
