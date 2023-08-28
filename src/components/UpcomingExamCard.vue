<script setup lang="ts">
import type { UpcomingExamCardDetails } from '~/types'

interface ExamCardProps {
  details: UpcomingExamCardDetails
}

defineProps<ExamCardProps>()
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
  </div>
</template>
