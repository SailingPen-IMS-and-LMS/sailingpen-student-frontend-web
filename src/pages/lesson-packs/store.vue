<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BrowseLessonPack from '~/components/BrowseLessonPack.vue'
import LessonPackStoreSidebar from '~/components/LessonPackStoreSidebar.vue'
import { useLessonPackSidebar } from '~/composables'
import { api } from '~/api'
import type { AvailableToBuyLessonPacksResponse } from '~/types/api-types/lesson-packs-types'

const { activateLessonPackSidebar } = useLessonPackSidebar()
const lessonPacks = ref<AvailableToBuyLessonPacksResponse>([])
const tutors = ref<{ f_name: string; l_name: string }[]>([])

function getLessonPacksByTutor({ f_name, l_name }: { f_name: string; l_name: string }) {
  return lessonPacks.value.filter((lp) => {
    return lp.tutor.user.f_name === f_name && lp.tutor.user.l_name === l_name
  })
}

onMounted(async () => {
  console.log('Store page created')
  const results = await api.lessonPacks.getAvailableToBuy()
  lessonPacks.value = results
  lessonPacks.value.forEach((lp) => {
    if (!tutors.value.includes(lp.tutor.user))
      tutors.value.push(lp.tutor.user)
  })
})
</script>

<template>
  <div class="browse-lesson-pack-page">
    <div v-for="tutor in tutors" :key="`${tutor.f_name}  ${tutor.l_name}`">
      <h2 class="font-semibold text-xl">
        {{ `${tutor.f_name}  ${tutor.l_name}` }}
      </h2>

      <div class="lesson-pack-store">
        <BrowseLessonPack
          v-for="lessonPack in getLessonPacksByTutor(tutor)" :key="lessonPack.id" :lesson-pack="lessonPack"
          @on-details-sidebar-open="activateLessonPackSidebar"
        />
      </div>
    </div>

    <LessonPackStoreSidebar />
  </div>
</template>

<style scoped lang="scss">
.lesson-pack-store{
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1rem;
}
</style>
