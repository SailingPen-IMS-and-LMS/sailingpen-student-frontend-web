<script setup lang="ts">
import type { AnnouncementInfoCard } from '~/types';

defineProps<AnnouncementInfoCardsProps>();

interface AnnouncementInfoCardsProps {
    details: AnnouncementInfoCard;
}

</script>

<template>
    <div class="announcement-info-card mb-10 rounded-lg px-3 mr-10"
    style = "box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.045);
            background-color: var(--bg-primary);;" >
        <div class="ann-title-date-pin flex">
            <h3 class="ann-title my-2  font-semibold">
                {{ details.title }}
            </h3>
            <div>
                <h3 class="ann-date my-2 ">
                    {{ details.date_time }}
                </h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
