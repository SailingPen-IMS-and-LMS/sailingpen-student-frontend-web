<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import PageHeading from '~/components/common/PageHeading.vue'
import { type LessonPackResources, ResourceType } from '~/types/api-types/lesson-packs-types'
import { api } from '~/api'

// import Attachment from '~/components/attachment.vue'
import VideoQuestion from '~/components/VideoQuestion.vue'
import OtherVideo from '~/components/OtherVideo.vue'
import LessonPackDocumentOrImage from '~/components/LessonPackDocumentOrImage.vue'

const route = useRoute()
const lessonPackId = route.params.id as string | undefined

if (!lessonPackId) {
  alert('Lesson Pack is invalid.')
  throw new Error('Lesson Pack Id is invalid.')
}

const lessonPackResources = ref<LessonPackResources | undefined>(undefined)
const isResourcesLoading = ref(true)
const lessonPackVideos = computed(() => {
  return lessonPackResources.value?.resources.filter((resource) => {
    if (resource.type === ResourceType.VIDEO)
      return true

    return false
  })
})

const lessonPackDocuments = computed(() => {
  return lessonPackResources.value?.resources.filter((resource) => {
    if (resource.type === ResourceType.DOCUMENT)
      return true

    return false
  })
})

const lessonPackImages = computed(() => {
  return lessonPackResources.value?.resources.filter((resource) => {
    if (resource.type === ResourceType.IMAGE)
      return true

    return false
  })
})

const currentVideoId = ref(0)
const currentVideo = computed(() => {
  if (currentVideoId.value) {
    return lessonPackVideos.value?.find((lpv) => {
      return lpv.id === currentVideoId.value
    })
  }
  return undefined
})
onMounted(async () => {
  isResourcesLoading.value = true
  lessonPackResources.value = await api.lessonPacks.getLessonPackResources(lessonPackId)
  isResourcesLoading.value = false
  if (lessonPackVideos.value && lessonPackVideos.value.length > 0)
    currentVideoId.value = lessonPackVideos.value[0].id
  console.log(lessonPackResources.value)
  //   const currentVideoId = computed(() => lessonPackVideos.value ? (lessonPackVideos.value.length > 0 ? lessonPackVideos.value[0].id : undefined) : undefined)
})
</script>

<template>
  <div class="lesson-pack-page">
    <PageHeading class="">
      {{
        lessonPackResources ? lessonPackResources.name : "Lesson Pack is not valid."
      }}
    </PageHeading>
    <div v-if="lessonPackResources && currentVideo" class="player-grid">
      <div
        class="player"
        :style="{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${currentVideo.thumbnail_url})`,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0.5rem',
        }"
      >
        <iframe
          class="rounded-lg"
          :src="currentVideo.url"
          style="border: none"
          height="506.25"
          width="900"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen="true"
        />
      </div>

      <div class="video-info">
        <h2 class="text-xl font-semibold">
          {{ currentVideo.name }}
        </h2>
        <div class="flex gap-4 my-4">
          <img :src="lessonPackResources.tutor.user.avatar" class="user-profile" alt="">
          <div class="">
            <p class="font-semibold text-lg">
              {{ `${lessonPackResources.tutor.user.f_name} ${lessonPackResources.tutor.user.l_name}` }}
            </p>
            <p>{{ lessonPackResources.tutor.subject.subject_name }}</p>
          </div>
        </div>

        <p class="text-l font-semibold">
          The notes relevant to the lesson
        </p>
        <div class="lecture-notes my-4 ">
          <Attachment
            :details="{ attachmentName: 'Differentiation Introduction', image: '/notes-1.jpg', tutorialNumber: 1 }"
          />
          <Attachment
            :details="{ attachmentName: 'Differentiation Introduction', image: '/notes-1.jpg', tutorialNumber: 2 }"
          />
        </div>
        <!-- <p class="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p> -->

        <div class="flex gap-4">
          <img src="/student-profile.jpg" class="user-profile mt-4" alt="">
          <div class="flex justify-between items-center w-[100%]">
            <input type="text" placeholder="Ask a question">
            <zondicons-send class="" />
          </div>
        </div>

        <hr style="width:100%; margin-block: 0.5rem;">

        <div>
          <VideoQuestion
            :details="{ userProfile: '/student-profile-2.jpg', studentName: 'Kavini Sulakshana', time: '6 months ago', question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text but also the leap into electronic typesetting, remaining essentially unchanged.' }"
          />

          <VideoQuestion
            :details="{ userProfile: '/student-profile-3.jpg', studentName: 'Malka Samanmalee', time: '7 months ago', question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text' }"
          />

          <VideoQuestion
            :details="{ userProfile: '/student-profile-4.jpg', studentName: 'Shehan Senanayaka', time: '10 months ago', question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text but also the leap into remaining essentially unchanged.' }"
          />
        </div>
      </div>

      <div class="other-videos">
        <h2 class="text-lg font-semibold mb-4">
          All videos in the Lesson Pack
        </h2>
        <div>
          <OtherVideo
            v-for="resource in lessonPackVideos"
            :key="resource.id" :current-video-id="currentVideoId || 0" :details="resource"
            @click="() => {
              currentVideoId = resource.id
            }"
          />
        </div>

        <h2 v-if="lessonPackDocuments && lessonPackDocuments?.length > 0" class="text-lg font-semibold mb-4">
          All documents in the Lesson Pack
        </h2>
        <div>
          <LessonPackDocumentOrImage
            v-for="resource in lessonPackDocuments"
            :key="resource.id" :details="resource"
          />
        </div>

        <h2 v-if="lessonPackImages && lessonPackImages?.length > 0" class="text-lg font-semibold mb-4">
          All images in the Lesson Pack
        </h2>
        <div>
          <LessonPackDocumentOrImage
            v-for="resource in lessonPackImages"
            :key="resource.id" :details="resource"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .player-grid{
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 1fr;
        gap: 2rem;
        margin-block: 2rem;
        grid-template-areas:
            'video other-video'
            'video-info other-video';

            @include mq(md){

            }
    }

    .player{
        width: 900px;
        aspect-ratio: 16/9;
        grid-area: video;
    }

    .video-info{
        width: 900px;
        grid-area: video-info;
    }

    .other-videos{
        grid-area: other-video;
    }

    .user-profile{
        width: 50px;
        height: 50px;
        aspect-ratio: 1;
        border-radius: 50%;
    }

    .lecture-notes{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    input{
        border: none;
        outline: none;
    }
</style>
