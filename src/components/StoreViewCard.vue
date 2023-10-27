<script setup lang="ts">
import { toRefs } from 'vue'
import { type LessonPackDetails, ResourceType } from '~/types/api-types/lesson-packs-types'
import IVscodeIconsFileTypePdf2 from '~icons/vscode-icons/file-type-pdf2'
import ITeenyiconsImageOutline from '~icons/teenyicons/image-outline'

interface StoreViewCardProps {
  details: LessonPackDetails['resources'][number]
}

const props = defineProps<StoreViewCardProps>()
const { details } = toRefs(props)
</script>

<template>
  <div
    v-if="details.type === ResourceType.VIDEO"
    class="m-[1rem] flex text-white w-[250px] h-[150px] pl-10" style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);"
    :style="{
      backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${details.thumbnail_url})`,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0.5rem',
    }
    "
  >
    <div class="mx-[1rem] ">
      <div class="m-2">
        <h3 class="font-semibold text-lg">
          {{ details.name }}
        </h3>
      </div>
    </div>
  </div>

  <div v-if="details.type === ResourceType.DOCUMENT" class="flex items-center py-2 px-10 gap-4">
    <IVscodeIconsFileTypePdf2 />
    <p>{{ details.name }}</p>
  </div>

  <div v-if="details.type === ResourceType.IMAGE" class="flex items-center py-2 px-10 gap-4">
    <ITeenyiconsImageOutline />
    <p>{{ details.name }}</p>
  </div>
</template>
