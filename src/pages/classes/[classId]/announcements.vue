<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { api } from '~/api'
import AnnouncementCard from '~/components/AnnouncementCard.vue'
import type { Announcements } from '~/types/api-types/announcements-types'

const filterDate = ref('')
const route = useRoute()
const classId = route.params.classId as string
const announcements = ref<Announcements>([])
const isAnnouncementsLoading = ref(true)
async function getAnnouncementsByClass() {
  isAnnouncementsLoading.value = true
  const results = await api.announcements.getAnnouncements(classId)
  announcements.value = results
  isAnnouncementsLoading.value = false
}

onMounted(async () => {
  await getAnnouncementsByClass()
  //   isAnnouncementsLoading.value = true
  //   const today = new Date()
  //   filterDate.value = today.toISOString().slice(0, 10)

  //   const results = await api.announcements.getAnnouncements()
  //   announcements.value = results
  //   announcements.value.forEach(() => {

//   })
//   isAnnouncementsLoading.value = false
})
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
        v-for="announcement in announcements" :key="announcement.id" :details="announcement"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
