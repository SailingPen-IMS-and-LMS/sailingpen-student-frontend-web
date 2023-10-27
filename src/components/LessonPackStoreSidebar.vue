<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import StoreViewCard from './StoreViewCard.vue'
import { useLessonPackSidebar } from '~/composables'
import type { LessonPackDetails } from '~/types/api-types/lesson-packs-types'
import { ResourceType } from '~/types/api-types/lesson-packs-types'
import { api } from '~/api'
import ISvgSpinners180RingWithBg from '~icons/svg-spinners/180-ring-with-bg'
import EmojioneBackhandIndexPointingRightMediumSkinTone from '~icons/emojione/backhand-index-pointing-right-medium-skin-tone'

const { closeLessonPackSidebar, isLessonPackSidebarOpen, lessonPackId } = useLessonPackSidebar()

const lessonPackDetails = ref<LessonPackDetails | undefined>(undefined)
const isLessonPackDetailsLoading = ref(true)
watch(lessonPackId, async (newLessonPackId) => {
  if (newLessonPackId !== '') {
    isLessonPackDetailsLoading.value = true
    lessonPackDetails.value = await api.lessonPacks.getMoreDetails(newLessonPackId)
    isLessonPackDetailsLoading.value = false
  }

  console.log(newLessonPackId)
})

function getLessonPackResourceByType(type: ResourceType) {
  if (lessonPackDetails.value) {
    return lessonPackDetails.value.resources.filter((r) => {
      if (r.type === type)
        return true
      else return false
    })
  }
  return [] as LessonPackDetails['resources']
}

const isTryingToBuy = ref(false)
const router = useRouter()
async function buyLessonPack() {
  isTryingToBuy.value = true
  const result = await api.lessonPacks.buyLessonPacks(lessonPackId.value)
  isTryingToBuy.value = false
  if (result) {
    closeLessonPackSidebar()
    await router.push('/lesson-packs')
  }
  else {
    alert('Something went wrong. Please try again later.')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="cs">
      <aside v-if="isLessonPackSidebarOpen" class="fixed top-0 bottom-0 right-0 w-[600px] shadow-xl bg-white">
        <button class="absolute top-4 left-4 cursor-pointer text-xl" @click="closeLessonPackSidebar">
          <ic-round-close />
        </button>

        <template v-if="!isLessonPackDetailsLoading && lessonPackDetails">
          <p class="font-bold text-xl pt-[1rem] px-[1rem] mt-[1.8rem] mb-[0.5rem]">
            {{ lessonPackDetails.name }}
          </p>
          <p class="px-[1.5rem]">
            {{ lessonPackDetails.description }}
          </p>

          <div class="flex gap-0.5 items-center px-6">
            <EmojioneBackhandIndexPointingRightMediumSkinTone class="text-[1.5rem] font-semibold pt-2" />
            <h3 class="text-lg font-semibold px-1 pt-2">
              Videos
            </h3>
          </div>

          <p v-if="getLessonPackResourceByType(ResourceType.VIDEO).length === 0">
            No Videos are available in this Lesson Pack
          </p>
          <div class="store-view-card-grid">
            <StoreViewCard
              v-for="resource in getLessonPackResourceByType(ResourceType.VIDEO)"
              :key="resource.id" :details="resource"
            />
          </div>

          <div class="flex gap-0.5 items-center px-6">
            <EmojioneBackhandIndexPointingRightMediumSkinTone class="text-[1.5rem] font-semibold pt-2" />
            <h3 class="text-lg font-semibold px-1 pt-2">
              Documents
            </h3>
          </div>
          <p v-if="getLessonPackResourceByType(ResourceType.DOCUMENT).length === 0" class="pl-10 pr-5">
            No Documents are available in this Lesson Pack
          </p>
          <div class="flex flex-col gap-4">
            <StoreViewCard
              v-for="resource in getLessonPackResourceByType(ResourceType.DOCUMENT)"
              :key="resource.id" :details="resource"
            />
          </div>

          <div class="flex gap-0.5 items-center px-6">
            <EmojioneBackhandIndexPointingRightMediumSkinTone class="text-[1.5rem] font-semibold pt-2" />
            <h3 class="text-lg font-semibold px-1 pt-2">
              Images
            </h3>
          </div>
          <p v-if="getLessonPackResourceByType(ResourceType.IMAGE).length === 0" class="pl-10 pr-5">
            No Images are available in this Lesson Pack
          </p>
          <div class="flex flex-col gap-4">
            <StoreViewCard
              v-for="resource in getLessonPackResourceByType(ResourceType.IMAGE)"
              :key="resource.id" :details="resource"
            />
          </div>

          <div class="px-[2rem] py-[1rem] flex justify-between">
            <NButton :is-loading="isTryingToBuy" loading-text="Buying" @click="buyLessonPack">
              Buy Now
            </NButton>
            <!-- <NButton>Add to cart</NButton> -->
          </div>
        </template>
        <div v-else-if="!isLessonPackDetailsLoading && !lessonPackDetails">
          <p>Sorry Lesson Pack is invalid.</p>
        </div>

        <div v-else class="absolute top-15/32 left-15/32 -translate-[-50%,-50%]">
          <ISvgSpinners180RingWithBg class="text-[3.5rem] text-[rgba(0,0,0,0.4)]" />
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
    .store-view-card-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.01rem;
    }
</style>
