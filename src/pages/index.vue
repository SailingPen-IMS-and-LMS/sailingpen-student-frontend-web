<script setup lang="ts">
import VideoThumbnail from '~/components/VideoThumbnail.vue'
</script>

<template>
  <div class="index-page">
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
  </div>
</template>
