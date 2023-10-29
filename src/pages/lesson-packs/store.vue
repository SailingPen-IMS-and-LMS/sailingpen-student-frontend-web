<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BrowseLessonPack from '~/components/BrowseLessonPack.vue'
import LessonPackStoreSidebar from '~/components/LessonPackStoreSidebar.vue'
import { useLessonPackSidebar } from '~/composables'
import { api } from '~/api'
import type { AvailableToBuyLessonPacksResponse } from '~/types/api-types/lesson-packs-types'
import ISvgSpinners180RingWithBg from '~icons/svg-spinners/180-ring-with-bg'

const { activateLessonPackSidebar } = useLessonPackSidebar()
const lessonPacks = ref<AvailableToBuyLessonPacksResponse>([])
const tutors = ref<{ f_name: string; l_name: string }[]>([])
const isLessonPacksLoading = ref(true)
function getLessonPacksByTutor({ f_name, l_name }: { f_name: string; l_name: string }) {
  return lessonPacks.value.filter((lp) => {
    return lp.tutor.user.f_name === f_name && lp.tutor.user.l_name === l_name
  })
}

onMounted(async () => {
  console.log('Store page created')
  isLessonPacksLoading.value = true

  const results = await api.lessonPacks.getAvailableToBuy()
  lessonPacks.value = results
  lessonPacks.value.forEach((lp) => {
    if (!tutors.value.find((t) => {
      if (t.f_name === lp.tutor.user.f_name && t.l_name === lp.tutor.user.l_name)
        return true
      return false
    }))

      tutors.value.push(lp.tutor.user)
  })
  isLessonPacksLoading.value = false
})
</script>

<template>
  <div class="browse-lesson-pack-page relative">
    <template v-if="!isLessonPacksLoading && tutors.length > 0">
      <div v-for="tutor in tutors" :key="`${tutor.f_name}  ${tutor.l_name}`">
        <h2 class="font-semibold text-xl">
          {{ `${tutor.f_name}  ${tutor.l_name}` }}
        </h2>

        <div class="lesson-pack-store">
          <BrowseLessonPack
            v-for="lessonPack in getLessonPacksByTutor(tutor)" :key="lessonPack.id" :lesson-pack="lessonPack"
            @on-details-sidebar-open="activateLessonPackSidebar(lessonPack.id)"
          />
        </div>
      </div>
    </template>
    <div v-else-if="!isLessonPacksLoading && tutors.length === 0" class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-[0.5rem]">
        <p class="text-[1.5rem] text-center">
          You already have access for all lesson packs <br> (Or there aren't any lesson packs available from your tutors.)
        </p>
      </div>
    </div>
    <div v-else class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-[0.5rem]">
        <ISvgSpinners180RingWithBg class="text-[3.5rem] text-[rgba(0,0,0,0.4)]" />
        <p class="text-[1.5rem]">
          Please wait...
        </p>
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
.browse-lesson-pack-page{
    min-height: calc(100vh - 60px);
}
</style>
