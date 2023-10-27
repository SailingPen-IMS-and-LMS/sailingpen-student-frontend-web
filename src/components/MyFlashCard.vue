<script setup lang="ts">
import type { MyFlashCardDetails } from '~/types'

interface MyFlashCardProps {
  details: MyFlashCardDetails
  backgroundColor: string
}

defineProps<MyFlashCardProps>()
</script>

<template>
  <div class="p-5 shadow-md rounded-xl h-[10rem] flex flex-col items-center justify-center" :style="{ backgroundColor }">
    <p class="font-semibold text-center  text-white text-xl">
      {{ details.question }}
    </p>

    <div class="flex gap-4 justify-end mt-[1rem] bg-white p-2 rounded-lg shadow-md">
      <material-symbols-edit-rounded class="text-green-800 text-xl" />
      <ic-sharp-delete class="text-red-800 text-xl" />
    </div>
  </div>
</template>
