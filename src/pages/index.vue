<script setup lang="ts">
import { storeToRefs } from 'pinia'
import VideoThumbnail from '~/components/VideoThumbnail.vue'
import { useTutionClassesStore } from '~/stores'

const tutionClassesStore = useTutionClassesStore()
const { isNotEnrolledInAnyClass } = storeToRefs(tutionClassesStore)
</script>

<template>
  <div class="index-page" :class="isNotEnrolledInAnyClass ? 'index-page--not-enrolled-error' : ''">
    <div v-if="isNotEnrolledInAnyClass">
      <h1 class="not-enrolled-error">
        You are not enrolled in any classes yet
        <RouterLink to="/classes" class="text-blue-500 flex items-center gap-2">
          Enroll in a class
          <ic-round-arrow-forward />
        </RouterLink>
      </h1>
    </div>
    <template v-else>
      <div class="top-left-container">
        <h2 class="font-semibold">
          Continue Watching
        </h2>

        <div class="flex gap-2">
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
        </div>
      </div>

      <div class="middle-left-container">
        <div>
          <h2 class="font-semibold">
            Pinned
          </h2>

          <div class="flex gap-2">
            <VideoThumbnail />
            <VideoThumbnail />
            <VideoThumbnail />
          </div>
        </div>
      </div>

      <div class="bottom-left-container">
        <h2 class="font-semibold">
          Your Progress
        </h2>

        <div class="progress-container">
          <img src="../assets/images/placeholders/chart-1.jpg" class="px-7 py-3 shadow-md" alt="">
        </div>
      </div>

      <div class="right-side-container">
        <div class="top-right-container right-container">
          <img src="../assets/images/calendar.png" class="mx-auto shadow-md" alt="">
        </div>

        <div class="middle-right-container">
          <h2 class="font-semibold">
            Upcoming Events
          </h2>

          <div class="right-container shadow-md">
            <div class="flex gap-2">
              <MaterialSymbolsEditDocumentRounded class="text-2xl" />
              <p>Physics Quiz No - 13 <span class="text-red-600">(Deadline 2023-08-02 11.55pm)</span></p>
            </div>
            <hr style="height:2px;border-width:0;color:gray;background-color:gray; margin: 1rem;">
            <div class="flex gap-2">
              <MaterialSymbolsEditDocumentRounded class="text-2xl" />
              <p>
                Chemistry Organic Activity <span class="text-red-600">(Deadline 2023-08-04 11.55pm)</span>
              </p>
            </div>
          </div>
        </div>

        <div class="bottom-right-container">
          <h2 class="font-semibold">
            Achievements
          </h2>

          <div class="right-container shadow-md">
            <div>
              <MaterialSymbolsTrophy class="text-xl text-amber-500" />
              <p class="font-medium">
                Physics Quiz No - 12
              </p>
            </div>
            <p class="indent-10">
              Marks : 97%
            </p>
            <p class="indent-10">
              Rank : 16
            </p>
            <hr style="height:2px;border-width:0;color:gray;background-color:gray; margin: 1rem;">

            <div>
              <MaterialSymbolsTrophy class="text-xl text-amber-500" />
              <p class="font-medium">
                Physics Quiz No - 12
              </p>
            </div>
            <p class="indent-10">
              Marks : 97%
            </p>
            <p class="indent-10">
              Rank : 16
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.index-page--not-enrolled-error {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: calc(100vh - 60px) !important;
}

.not-enrolled-error {
    text-align: center;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        font-size: 1.25rem;
        border-bottom: 1px solid rgba(0, 0, 255, 0);
        transition: all 0.2s ease-in-out;

        &:hover {
            border-bottom: 1px solid rgba(0, 0, 255, 1);
        }
    }
}
</style>
