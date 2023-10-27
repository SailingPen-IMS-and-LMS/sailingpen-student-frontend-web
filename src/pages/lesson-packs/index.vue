<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import LessonPack from '~/components/LessonPack.vue'
import PageHeading from '~/components/common/PageHeading.vue'
import type { LessonPacks } from '~/types'

const myLessonPacks: LessonPacks = {
  1: {
    tutorName: 'Ruwan Darshana',
    className: 'Combined Mathematics',
    lessonPacks: [
      { id: 1, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 2, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 3, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 4, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },
    ],
  },
  2: {
    tutorName: 'Nirandika Jayawardana',
    className: 'Chemistry',
    lessonPacks: [
      { id: 5, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-2.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 6, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-2.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 7, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-2.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 8, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-2.jpg', time: 'Lecture 5 hours 25 mins left' },
    ],
  },

  3: {
    tutorName: 'Nilantha Jayasuriya',
    className: 'Physics',
    lessonPacks: [
      { id: 5, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-3.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 6, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-3.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 7, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-3.jpg', time: 'Lecture 5 hours 25 mins left' },
      { id: 8, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-3.jpg', time: 'Lecture 5 hours 25 mins left' },
    ],
  },
}
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
    <div v-for="lp in myLessonPacks" :key="lp.tutorName">
      <h2 class="text-xl font-semibold mt-6">
        {{ lp.className }} - {{ lp.tutorName }}
      </h2>
      <div class="my-lesson-packs">
        <LessonPack v-for="myLessonpack in lp.lessonPacks" :key="myLessonpack.id" :details="myLessonpack" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
    .my-lesson-packs{
        display: grid;
        margin-top: 10px;
        margin-bottom: 2rem;

        @include mq(md){
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        }

        @include mq(xl){
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        }
    }
</style>
