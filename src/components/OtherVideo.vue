<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { LessonPackResources } from '~/types/api-types/lesson-packs-types'

interface OtherVideoProps {
  details: LessonPackResources['resources'][number]
  currentVideoId: number
}

const props = defineProps<OtherVideoProps>()
const { details } = toRefs(props)
const videoName = computed(() => {
  const nameParts = details.value.name.split('.')
  const namePartsWithoutExtension = nameParts.slice(0, nameParts.length - 1)
  return namePartsWithoutExtension.join('.')
})
</script>

<template>
  <div
    class="flex gap-2 my-3 items-center p-2 rounded-md cursor-pointer hover:bg-[var(--n-color-primary-100)]" :class="[
      details.id === currentVideoId ? 'bg-[var(--n-color-primary-200)]' : '',
    ]"
    style="transition: all 0.3s ease-in-out;"
  >
    <img :src="details.thumbnail_url || ''" alt="" class="w-[180px] h-[110px] rounded-md">
    <div>
      <p class="font-semibold">
        {{ videoName }}
      </p>
      <!-- <p>{{ details.date }}</p>
      <p>{{ details.time }}</p> -->
    </div>
  </div>
</template>
