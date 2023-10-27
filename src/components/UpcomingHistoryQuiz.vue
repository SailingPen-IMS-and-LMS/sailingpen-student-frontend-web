<script setup lang="ts">
import type { UpcomingHistoryDetails } from '~/types'

// import MdiFrequentlyAskedQuestions from '~icons/mdi/frequently-asked-questions'

defineProps<UpcomingHistoryProps>()

interface UpcomingHistoryProps {
  details: UpcomingHistoryDetails
}
</script>

<template>
  <div>
    <div class="text-lg m-4 font-medium flex gap-2">
      {{ details.heading }}
      {{ details.date }}
    </div>
    <div class="">
      {{ details.description }}
    </div>
  </div>
</template>
