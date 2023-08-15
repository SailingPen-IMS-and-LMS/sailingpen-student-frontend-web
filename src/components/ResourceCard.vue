<script setup lang="ts">
import type { ResourceInfoCard } from '~/types'

defineProps<ResourceCardProps>()

interface ResourceCardProps {
  details: ResourceInfoCard
}
</script>

<template>
  <div class="resource-info-card mb-10">
    <h3 class="resource-date my-2  font-semibold">
      {{ details.date }}
    </h3>

    <div
      class="resource-tum-content gap-4 rounded-lg px-3 mr-10"
      style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.045);"
    >
      <div class="flex">
        <div
          class="w-[800px] h-[200px] resource-image"
          :style="{
            backgroundImage: `url(${details.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
          }"
        />
        <div class="mr-4 resource-content mx-9">
          <div class=" mb-6">
            <div class="flex justify-between items-center">
              <h3 class="resource-title mb-6 text-xl font-medium pt-2">
                {{ details.title }}
              </h3>
              <!-- insert a check box -->
              <input id="check" type="checkbox" name="check" value="check">
            </div>
            <div class="resource-desc text-[0.9rem] font-[300] mr-40">
              {{ details.description }}
            </div>
          </div>
        </div>
      </div>

      <h2 class="attachment-heading mt-10 mb-7 text-lg font-medium">
        @ Attachments
      </h2>
      <div class="attachments-container mt-4 flex gap-5 ">
        <span v-for="attachment in details.attachments" :key="attachment.id" class="items-center justify-center pb-10 pl-5">
          <!-- <a :href="attachment.link" target="_blank" class="attachment-link"> -->
          <img
            src="../assets/images/pdf-icon.png"
            alt="PDF Icon"
            class="pdf-icon w-[40px] h-[50px]"
          >
          <span class="attachment-text">{{ attachment.text }}</span>
          <!-- </a> -->
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
