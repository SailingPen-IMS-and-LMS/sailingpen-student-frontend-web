<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NButton } from '@nethren-ui/vue'
import LessonPack from '~/components/LessonPack.vue'
import { api } from '~/api'
import type { BoughtLessonPacksResponse } from '~/types/api-types/lesson-packs-types'
import PageHeading from '~/components/common/PageHeading.vue'

const lessonPacks = ref<BoughtLessonPacksResponse>([])
const tutors = ref<{ f_name: string; l_name: string }[]>([])
const isLessonPacksLoading = ref(true)
function getLessonPacksByTutor({ f_name, l_name }: { f_name: string; l_name: string }) {
  return lessonPacks.value.filter((lp) => {
    return lp.tutor.user.f_name === f_name && lp.tutor.user.l_name === l_name
  })
}

onMounted(async () => {
  isLessonPacksLoading.value = true

  const results = await api.lessonPacks.getMyLessonPacks()
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
  <div class="lesson-packs-page">
    <div class="flex items-center justify-between mt-3">
      <PageHeading>
        My Lesson Packs
      </PageHeading>

      <NButton mode="outline">
        <RouterLink to="/lesson-packs/store">
          Browse Lesson Packs
        </RouterLink>
      </NButton>
    </div>
    <!-- <div v-for="lp in myLessonPacks" :key="lp.tutorName">
      <h2 class="text-xl font-semibold mt-6">
        {{ lp.className }} - {{ lp.tutorName }}
      </h2>
      <div class="my-lesson-packs">
        <LessonPack v-for="myLessonpack in lp.lessonPacks" :key="myLessonpack.id" :details="myLessonpack" />
      </div>
    </div> -->

    <div class="h-[1rem]" />
    <template v-if="!isLessonPacksLoading">
      <div v-for="tutor in tutors" :key="`${tutor.f_name}  ${tutor.l_name}`">
        <h2 class="font-semibold text-xl">
          {{ `${tutor.f_name}  ${tutor.l_name}` }}
        </h2>

        <div class="my-lesson-packs">
          <LessonPack
            v-for="lessonPack in getLessonPacksByTutor(tutor)" :key="lessonPack.id" :details="lessonPack"
          />
        </div>
      </div>
    </template>
    <div v-else class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-[0.5rem]">
        <ISvgSpinners180RingWithBg class="text-[3.5rem] text-[rgba(0,0,0,0.4)]" />
        <p class="text-[1.5rem]">
          Please wait...
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
    .my-lesson-packs{
        display: grid;
        margin-block: 1rem;

        @include mq(md){
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        }

        @include mq(xl){
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        }
    }
</style>
