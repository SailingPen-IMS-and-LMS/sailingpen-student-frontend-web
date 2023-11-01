<script setup lang="ts">
import { toRefs } from 'vue'
import type { WeeklySession } from '~/types'
import { ResourceType } from '~/types/api-types/lesson-packs-types'

interface WeeklySessionCardProps {
  session: WeeklySession | undefined
  date: string
}

const props = defineProps<WeeklySessionCardProps>()
const { date, session } = toRefs(props)
</script>

<template>
  <div v-if="session" class="bg-[var(--bg-primary)] rounded-lg p-4">
    <h3 class="font-semibold text-[lg] mb-3">
      {{ date }}
    </h3>

    <div>
      <div class="flex">
        <iframe
          class="rounded-lg"
          :src="session.video_url"
          style="border: none"
          height="253.125"
          width="450"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen="true"
        />
        <div class="mr-4 mx-9">
          <div class=" mb-6">
            <div class="flex justify-between items-center">
              <h3 class="resource-title mb-6 text-xl font-medium pt-2">
                Recordings and attachments for {{ date }}
              </h3>
            </div>
            <div class="resource-desc text-[0.9rem] font-[300] mr-40">
              {{ session.description }}
            </div>
          </div>
        </div>
      </div>

      <h2 class="attachment-heading mt-10 mb-7 text-lg font-medium">
        Attachments
      </h2>
      <div class=" mt-4 grid grid-cols-4 gap-5">
        <a v-for="attachment in session.attachments" :key="attachment.id" :href="attachment.url" target="_blank" :download="attachment.name" class="flex items-center items-center gap-4 justify-center p-2 rounded-md shadow-md bg-[var(--bg-secondary)]">
          <!-- <a :href="attachment.link" target="_blank" class="attachment-link"> -->
          <img
            v-if="attachment.type === ResourceType.DOCUMENT"
            src="../assets/images/pdf-icon.png"
            :alt="`PDF Icon for ${attachment.name}`"
            class="pdf-icon w-[40px] h-[50px]"
          >
          <img
            v-if="attachment.type === ResourceType.IMAGE"
            :src="attachment.url"
            :alt="attachment.name"
            class="pdf-icon w-[80px] h-[45px] object-cover"
          >
          <span class="attachment-text">{{ attachment.name }}</span>
          <!-- </a> -->
        </a>
      </div>
    </div>
  </div>
  <div v-else class="bg-[var(--bg-primary)] rounded-lg p-4">
    <h3 class="font-semibold text-[lg] mb-3">
      {{ date }}
    </h3>
    Resources for this week aren't uploaded yet.
  </div>
</template>
