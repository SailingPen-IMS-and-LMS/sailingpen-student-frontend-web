<script setup lang="ts">
import type { MyLessonPacksDetails } from '~/types'

interface MyLessonPackProps {
  details: MyLessonPacksDetails
}

defineProps<MyLessonPackProps>()
</script>

<template>
  <RouterLink
    class="mt-0.5 flex text-white" style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);"
    :style="{
      backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${details.image})`,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0.5rem',
    }
    "
    :to="`/lesson-packs/${details.name}`"
  >
    <div class="mr-4">
      <div class="m-6">
        <h3 class="font-semibold text-xl">
          {{ details.name }}
        </h3>
        <h4 class="mt-6">
          {{ details.time }}
        </h4>
      </div>
    </div>
  </RouterLink>
</template>

<style></style>
