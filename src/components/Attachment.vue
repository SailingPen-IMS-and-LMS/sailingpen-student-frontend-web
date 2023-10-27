<script setup lang="ts">
import type { AttachmentDetails } from '~/types'

interface AttachmentProps {
  details: AttachmentDetails
}

defineProps<AttachmentProps>()
</script>

<template>
  <div class="flex gap-2 items-center">
    <img :src="details.image" alt="" class="w-40 h-20 rounded-md">
    <div>
      <p class="font-semibold">
        {{ details.attachmentName }}
      </p>
      <p>Tutorial {{ details.tutorialNumber }}</p>
    </div>
  </div>
</template>
