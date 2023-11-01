<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { NButton } from '@nethren-ui/vue'
import type { LessonPackResources } from '~/types/api-types/lesson-packs-types'
import { ResourceType } from '~/types/api-types/lesson-packs-types'
import IVscodeIconsFileTypePdf2 from '~icons/vscode-icons/file-type-pdf2'
import IIcOutlineFileDownload from '~icons/ic/outline-file-download'

interface LessonPackDocumentOrImageProps {
  details: LessonPackResources['resources'][number]
}

const props = defineProps<LessonPackDocumentOrImageProps>()
const { details } = toRefs(props)
const documentOrImageName = computed(() => {
  const nameParts = details.value.name.split('.')
  const namePartsWithoutExtension = nameParts.slice(0, nameParts.length - 1)
  return namePartsWithoutExtension.join('.')
})
</script>

<template>
  <div
    class="flex gap-2 my-3 items-center p-2 rounded-md cursor-pointer"
    style="transition: all 0.3s ease-in-out;"
  >
    <img v-if="details.type === ResourceType.IMAGE" :src="details.url || ''" alt="" class="w-[180px] h-[110px] rounded-md">
    <IVscodeIconsFileTypePdf2 v-else class="text-[3rem]" />
    <div>
      <p class="font-semibold">
        {{ documentOrImageName }}
      </p>
      <a :href="details.url" download target="_blank"><NButton mode="text">
        <template #leftIcon><IIcOutlineFileDownload class="text-[1.25rem]" /></template>
      </NButton></a>
    </div>
  </div>
</template>
