<script setup lang="ts">
import { storeToRefs } from 'pinia'
import EnrolledClass from '~/components/EnrolledClass.vue'
import TutorInfoCard from '~/components/TutorInfoCard.vue'
import PageHeading from '~/components/common/PageHeading.vue'
import ClassListSidebar from '~/components/ClassListSidebar.vue'
import { api } from '~/api'
import { useTutionClassesStore } from '~/stores'
import type { ListOfTutorBriefInfo } from '~/types'

const tutionClassesStore = useTutionClassesStore()
const { enrolledClasses, loadingEnrolledClasses } = storeToRefs(tutionClassesStore)

const tutorInfoCards = ref<ListOfTutorBriefInfo>([])

onMounted(async () => {
  try {
    const response = await api.users.tutors.getListForStudents()
    if (response)
      tutorInfoCards.value = response
  }
  catch (error) {
    console.log(error)
    tutorInfoCards.value = []
  }
})

async function onNewEnroll() {
  try {
    const result = await api.tutionClasses.enrolled()
    tutionClassesStore.setEnrolledClasses(result || [])
  }
  catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="classes-page">
    <PageHeading>
      Classes
    </PageHeading>

    <div
      class="enrolled-classes"
      :class="enrolledClasses.length === 0 || loadingEnrolledClasses ? 'enrolled-classes--empty' : ''"
    >
      <template v-if="enrolledClasses.length > 0">
        <EnrolledClass
          v-for="enrolledClass in enrolledClasses" :key="enrolledClass.class_id"
          :class-info="enrolledClass"
        />
      </template>
      <svg-spinners-180-ring v-else-if="loadingEnrolledClasses" class="text-4xl" />
      <p v-else class="text-xl">
        You aren't enrolled in any classes yet.
      </p>
    </div>

    <h2 class="text-2xl font-semibold my-5">
      Available tutors
    </h2>
    <div class="available-tutors">
      <TutorInfoCard
        v-for="tutorInfoCard in tutorInfoCards" :key="tutorInfoCard.tutor_id"
        :tutor-info="tutorInfoCard"
      />
    </div>
    <ClassListSidebar @enroll="onNewEnroll" />
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

    &--empty {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
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
