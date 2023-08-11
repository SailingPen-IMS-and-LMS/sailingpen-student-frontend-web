<script setup lang="ts">
import type { AnnouncementInfoCard } from '~/types';
import RiPushpinLine from '~icons/ri/pushpin-line'

defineProps<AnnouncementInfoCardsProps>();

interface AnnouncementInfoCardsProps {
    details: AnnouncementInfoCard;
}


</script>

<template>
    <div class="announcement-info-card my-10 mx-20 rounded-lg px-3 mx-20"
    style = "box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.045);
            background-color: var(--bg-primary);;" >
        <div class="ann-title-date-pin flex justify-between">
            <h3 class="ann-title my-2 flex items-center font-semibold">
                {{ details.title }}
            </h3>
            <div class="flex">
                <h3 class="flex ann-date my-2 items-center text-gray-400">
                    {{ details.date_time }}
                </h3>
                <RiPushpinLine class="ann-pin w-6 h-6 m-4" v-if="details.is_pinned"/>
                <div v-else class="w-6 h-6 m-4"></div>
            </div>
        </div>
        <div class="ann-description px-5">
            {{ details.description }}
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
