<script setup lang="ts">
import type { NavigationDetails } from '~/types'

interface NavigationDetailProps {
  details: NavigationDetails
}

defineProps<NavigationDetailProps>()
</script>

<template>
  <div class="rounded-lg">
    <p class="font-semibold h-[20px] w-[30px] bg-white text-center" style="border-radius: 8px 8px 0 0;">
      {{ details.questionNumber }}
    </p>
    <p class="font-semibold text-2xl h-[20px] w-[30px] rounded-lg bg-[#D9D9D9]" style="border-radius: 0 0 8px 8px;" />
  </div>
</template>
