<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import type { ExamCardHistoryDetails } from '~/types'

interface ExamCardHistoryProps {
  details: ExamCardHistoryDetails
}

defineProps<ExamCardHistoryProps>()
</script>

<template>
  <div class="bg-[var(--bg-primary)] px-10 py-4 rounded-xl shadow-md my-5">
    <div class="flex gap-4 items-center font-semibold text-xl my-4">
      <healthicons-i-exam-qualification-outline class="text-red-600" />
      <p>
        {{ details.name }} - Paper Number {{ details.paperNumber }}
      </p>
    </div>

    <p>{{ details.description }}</p>

    <RouterLink class="flex justify-end" to="/exams/leaderboard">
      <NButton mode="solid">
        View Leaderboard
      </NButton>
    </RouterLink>
  </div>
</template>
