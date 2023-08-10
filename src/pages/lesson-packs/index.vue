<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import type { MyLessonPacksDetails } from '~/types'

const myLessonPacks: MyLessonPacksDetails[] = [
  { id: 1, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },
  { id: 1, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },
  { id: 1, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },
  { id: 1, name: '2023 Applied Maths Introduction class Gampaha', image: '/lesson-pack-1.jpg', time: 'Lecture 5 hours 25 mins left' },

]
</script>

<template>
  <div class="relative">
    <h1 class="text-2xl font-semibold">
      My Lesson Packs
    </h1>
    <h2 class="text-xl font-semibold">
      Combined Mathematics - Ruwan Darshana
    </h2>
    <div class="pb-8">
      <NButton mode="outline" class="absolute lesson-pack-button">
        Browse Lesson Packs
      </NButton>
    </div>

    <div class="my-lesson-packs">
      <LessonPack v-for="myLessonpack in myLessonPacks" :key="myLessonpack.id" :details="myLessonpack" />
    </div>
  </div>
</template>

<style lang="scss">
    .my-lesson-packs{
        display: grid;
        margin-top: 10px;

        @include mq(xl){
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        }
    }

    .lesson-pack-button{
        right: 0.3rem;
        top: 1rem;
    }
</style>
