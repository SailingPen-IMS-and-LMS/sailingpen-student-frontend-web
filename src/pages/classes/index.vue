<script setup lang="ts">
import EnrolledClass from '~/components/EnrolledClass.vue'
import TutorInfoCard from '~/components/TutorInfoCard.vue'
import PageHeading from '~/components/common/PageHeading.vue'
import type { EnrolledClassDetails } from '~/types'

const enrolledClasses: EnrolledClassDetails[] = [
  { id: 1, name: 'Ruwan Darshana', image: '/tutor-1.jpg', subject: 'Combined Mathematics' },
  { id: 2, name: 'Nilantha Jayasuriya', image: '/tutor-2.jpg', subject: 'Physics' },
  { id: 3, name: 'Thamira Herath', image: '/tutor-3.jpg', subject: 'Chemistry' },
  { id: 4, name: 'Prasanna Baddewithana', image: '/student-profile.jpg', subject: 'Combined Mathematics' },
]

const tutorInfoCards: EnrolledClassDetails[] = [
  { id: 1, name: 'Ruwan Darshana', image: '/tutor-1.jpg', subject: 'Combined Mathematics' },
  { id: 2, name: 'Nilantha Jayasuriya', image: '/student-profile.jpg', subject: 'Combined Mathematics' },
  { id: 3, name: 'Thamira Herath', image: '/student-profile.jpg', subject: 'Combined Mathematics' },
  { id: 4, name: 'Prasanna Baddewithana', image: '/student-profile.jpg', subject: 'Combined Mathematics' },
]
</script>

<template>
  <div class="classes-page">

    <PageHeading>
      Enrolled classes
    </PageHeading>

    <div class="enrolled-classes">
      <EnrolledClass v-for="enrolledClass in enrolledClasses" :key="enrolledClass.id" :details="enrolledClass" />
    </div>

    <h2 class="text-2xl font-semibold my-5">
      You can also enroll in
    </h2>
    <div class="available-tutors">
      <TutorInfoCard v-for="tutorInfoCard in tutorInfoCards" :key="tutorInfoCard.id" :details="tutorInfoCard" />
    </div>
  </div>
</template>

<style lang="scss">
.enrolled-classes {
    display: grid;
    margin-top: 1.5rem;

    @include mq(md) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    @include mq(xl) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

.available-tutors {
    display: grid;
    margin-top: 1.5rem;
    margin-bottom: 3rem;

    @include mq(md) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    @include mq(xl) {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}
</style>
