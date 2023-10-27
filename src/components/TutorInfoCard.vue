<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { useClasslistSidebar } from '~/composables'
import type { TutorBriefInfo } from '~/types'

interface TutorInfoCardProps {
  tutorInfo: TutorBriefInfo
}

const props = defineProps<TutorInfoCardProps>()

const { tutorInfo } = toRefs(props)

const tutorFullName = computed(() => {
  return `${tutorInfo.value.tutor_f_name} ${tutorInfo.value.tutor_l_name}`
})

const { activateClasslistSidebar } = useClasslistSidebar()
</script>

<template>
  <div
    class="tutor-info-card flex items-center gap-4 rounded-lg bg-[var(--bg-primary)] "
    style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);"
  >
    <div
      :style="{
        backgroundImage: `url(${tutorInfo.tutor_avatar})`,
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
          {{ tutorFullName }}
        </h3>

        <span class="text-[0.9rem] font-[300]">
          {{ tutorInfo.subject }}
        </span>
      </div>
      <NButton
        mode="outline" class="mt-4"
        @click="activateClasslistSidebar(tutorInfo.tutor_id)"
      >
        View classes
      </NButton>
    </div>
  </div>
</template>

<style lang="scss">
.tutor-info-card {
    h3 {
        @apply text-xl font-bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 218px;
    }
}
</style>
