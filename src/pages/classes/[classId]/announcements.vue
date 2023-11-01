<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '~/api'
import type { AnnouncementInfoCard } from '~/types'
import AnnouncementCard from '~/components/AnnouncementCard.vue'
import type { GetAnnouncements } from '~/types/api-types/announcements-types'

const filterDate = ref('')
const announcements = ref<GetAnnouncements>([])
const isAnnouncementsLoading = ref(true)
function getAnnouncementsByClass() {
  return announcements.value(() => {

  })
}

onMounted(() => {
  isAnnouncementsLoading.value = true
  const today = new Date()
  filterDate.value = today.toISOString().slice(0, 10)

  const results = await api.announcements.getAnnouncements()
  announcements.value = results
  announcements.value.forEach(() => {

  })
  isAnnouncementsLoading.value = false
})

const announcementInfoCards: AnnouncementInfoCard[] = [
  {
    id: 1,
    title: 'Class rescheduled',
    description: 'The class scheduled for 10th March has been rescheduled to 12th March',
    date_time: '2023-3-10 10:00 A.M.',
    is_pinned: true,
  },
  {
    id: 2,
    title: 'Class cancellation',
    description: 'The class scheduled for 10th March has been cancelled',
    date_time: '2023-3-8 10:00 A.M.',
    is_pinned: true,
  },
  {
    id: 3,
    title: 'Class registration',
    description: 'Registration for the combined mathematics paper class for 2024 A/L has been open',
    date_time: '2023-3-5 10:00 A.M.',
    is_pinned: false,
  },
]
</script>

<template>
  <div class="class-announcements-page mt-8">
    <!-- date filter -->
    <div class="date-filter flex flex-row">
      <label for="filter-date">Date : </label>
      <input v-model="filterDate" type="date" class="filter-date">
    </div>

    <div class="announcement-cards">
      <AnnouncementCard
        v-for="announcementInfoCard in getAnnouncementsByClass()" :key="announcements.id"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
