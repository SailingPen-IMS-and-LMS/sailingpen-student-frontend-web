<script setup lang="ts">
import { toRefs } from 'vue'
import { format, parseISO } from 'date-fns'
import type { Announcement } from '~/types/api-types/announcements-types'

interface AnnouncementCardsProps {
  details: Announcement
}

const props = defineProps<AnnouncementCardsProps>()
const { details } = toRefs(props)

const announcementDate = computed(() => {
  return format(parseISO(details.value.created_at), 'do \'of\' MMMM, yyyy \'at\' h:mm a')
})
</script>

<template>
  <div
    class="announcement-info-card my-10 mx-20 rounded-lg px-3 mx-20"
    style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.045);
            background-color: var(--bg-primary);;"
  >
    <div class="ann-title-date-pin flex justify-between">
      <h3 class="ann-title my-2 flex items-center font-semibold">
        {{ details.title }}
      </h3>
      <div class="flex">
        <h3 class="flex ann-date my-2 items-center text-gray-400">
          {{ announcementDate }}
        </h3>
        <!-- <RiPushpinLine v-if="details.is_pinned" class="ann-pin w-6 h-6 m-4" />
        <div v-else class="w-6 h-6 m-4" /> -->
      </div>
    </div>
    <div class="ann-description px-5">
      {{ details.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
