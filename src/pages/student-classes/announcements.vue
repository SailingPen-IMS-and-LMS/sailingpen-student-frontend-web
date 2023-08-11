<script setup lang="ts">
import type { AnnouncementInfoCard } from '~/types';
import { ref } from 'vue';
import AnnouncementCard from '~/components/AnnouncementCard.vue';

const filterDate = ref('');

onMounted(() => {
    const today = new Date();
    filterDate.value = today.toISOString().slice(0,10)
})

const announcementInfoCards : AnnouncementInfoCard[] = [
    {
        id:1,
        title: "Class rescheduled",
        description: "The class scheduled for 10th March has been rescheduled to 12th March",
        date_time: "2023-3-10 10:00 A.M.",
        is_pinned: true,
    },
    {
        id:2,
        title: "Class cancellation",
        description: "The class scheduled for 10th March has been cancelled",
        date_time: "2023-3-8 10:00 A.M.",
        is_pinned: true,
    },
    {
        id:3,
        title: "Class registration",
        description: "Registration for the combined mathematics paper class for 2024 A/L has been open",
        date_time: "2023-3-5 10:00 A.M.",
        is_pinned: false,
    }
]

</script>

<template>
    <div class="class-announcements">
        <!-- date filter -->
        <div class="date-filter flex flex-row">
            <label for="filter-date">Date : </label>
            <input type="date" v-model="filterDate" class="filter-date" />
        </div>

        <div class="announcement-cards">
            <AnnouncementCard v-for="announcementInfoCard in announcementInfoCards"
                :key="announcementInfoCard.id"
                :details="announcementInfoCard" />
        </div>

    </div>
</template>

<style lang="scss" scoped>

</style>
