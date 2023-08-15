<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import type { NotEnrolledClass } from '~/types'
import { useAuthStore } from '~/stores'
import { api } from '~/api'

const props = defineProps<NotEnrolledClassCardProps>()

const emit = defineEmits<{
  enroll: [payload:void]
}>()

interface NotEnrolledClassCardProps {
  classInfo: NotEnrolledClass
}

const { classInfo } = toRefs(props)

const authStore = useAuthStore()
const { profile } = storeToRefs(authStore)

const enrolling = ref(false)

async function enroll() {
  if (!profile.value)
    return
  enrolling.value = true
  try {
    const result = await api.tutionClasses.enrollByStudent(profile.value?.student_id, classInfo.value.class_id)
    if (result)
      emit('enroll')
  }
  catch (error) {
    console.error(error)
  }
  finally {
    enrolling.value = false
  }
}
</script>

<template>
  <div class="not-enrolled-class-card flex flex-col gap-4">
    <h3 class="text-xl font-bold">
      {{ classInfo.class_name }}
    </h3>
    <p>{{ classInfo.class_description }}</p>
    <div>
      <span class="block"><strong>Admission fee</strong>:  {{ classInfo.admission_fee }} LKR</span>
      <span class="block"><strong>Monthly fee</strong>:  {{ classInfo.monthly_fee }} LKR</span>
    </div>
    <NButton class="self-start" :is-loading="enrolling" loading-text="Enrolling" :disabled="enrolling" @click="enroll">
      Enroll
    </NButton>
  </div>
</template>

<style lang="scss">
.not-enrolled-class-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}
</style>
