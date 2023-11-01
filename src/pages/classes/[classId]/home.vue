<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ISvgSpinners180Ring from '~icons/svg-spinners/180-ring'

import type { WeeklySessions } from '~/types'
import { api } from '~/api'
import { getDaysInCurrentMonth } from '~/utils'

const route = useRoute()
const classId = route.params.classId as string

// import { NInput } from '@nethren-ui/vue';

const startDate = ref('')
const endDate = ref('')

const days = ref<string[]>([])
const weeklyResources = ref<WeeklySessions>([])

function getWeeklySessionForDate(date: string) {
  const weeklySession = weeklyResources.value.find((weeklySession) => {
    return weeklySession.date === date
  })
  return weeklySession
}

const resourcesLoading = ref(true)

// set dates initially
onMounted(async () => {
  const today = new Date()
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(today.getDate() - 7)

  startDate.value = sevenDaysAgo.toISOString().slice(0, 10)
  endDate.value = today.toISOString().slice(0, 10)

  resourcesLoading.value = true

  const result = await api.tutionClasses.weeklySessions.getForCurrentMonth(classId)
  if (result && result.length > 0) {
    weeklyResources.value = result
    days.value = getDaysInCurrentMonth(weeklyResources.value[0].tution_class.schedule.day)
    days.value.forEach((day) => {
      const weeklySession = getWeeklySessionForDate(day)
      console.log(weeklySession)
    })
  }
  resourcesLoading.value = false
})
</script>

<template>
  <div class="min-h-[calc(100vh-160px)] py-4" :class="[resourcesLoading ? 'relative' : '']">
    <!-- date filter -->
    <div class="flex items-center gap-4 justify-end">
      <div>
        <label for="from-date">From : </label>
        <input
          v-model="startDate" type="date"
          class=""
        >
      </div>
      <div>
        <label class="ml-14" for="to-date">To : </label>
        <input
          v-model="endDate" type="date" label="to-date"
          class=""
        >
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-4">
      <WeeklySessionCard
        v-for="day in days"
        :key="day"
        :session="getWeeklySessionForDate(day)"
        :date="day"
      />
    </div>

    <!-- resource cards -->
    <div v-if="resourcesLoading" class="absolute top-1/2 left-1/2 -translate-[50%] flex flex-col justify-center items-center text-[rgba(0,0,0,0.4)]">
      <ISvgSpinners180Ring class="text-[2.5rem]" />
      <p class="text-[1.5rem]">
        Please wait ...
      </p>
    </div>
  </div>
</template>
