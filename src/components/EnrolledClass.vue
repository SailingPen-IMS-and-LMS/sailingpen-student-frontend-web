<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { toRefs } from 'vue'
import type { EnrolledClass } from '~/types'

interface EnrolledClassProps {
  classInfo: EnrolledClass
}

const props = defineProps<EnrolledClassProps>()

const { classInfo } = toRefs(props)

const tutorName = computed(() => {
  return `${classInfo.value.tutor_f_name} ${classInfo.value.tutor_l_name}`
})
</script>

<template>
  <div
    class="enrolled-class flex items-center gap-4 rounded-lg bg-[var(--bg-primary)] shadow-md"
  >
    <div
      :style="{
        backgroundImage: `url(${classInfo.tutor_avatar})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0.5rem 0 0 0.5rem',
      }"

      class="w-[150px] h-[150px]"
    />
    <!-- <img :src="details.image" :alt="`${details.name}'s Photo'`" class="w-[150px] rounded-lg"> -->
    <div class="mr-4">
      <div class=" mb-6">
        <h3 class="">
          {{ classInfo.class_name }}
        </h3>

        <span class="text-[0.9rem] font-[300]">
          {{ tutorName }}
        </span>
      </div>
      <NButton mode="outline" class="mt-4">
        <RouterLink :to="`/classes/${classInfo.class_id}`">
          Go to class
        </RouterLink>
      </NButton>
    </div>
  </div>
</template>

<style lang="scss">
.enrolled-class {
    h3 {
        @apply text-xl font-bold;
    }
}
</style>
