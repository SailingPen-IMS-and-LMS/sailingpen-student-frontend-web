<script setup lang="ts">
import type { ResourceInfoCard } from '~/types';
import  ResourceCard  from '~/components/ResourceCard.vue';
// import { NInput } from '@nethren-ui/vue';
import { ref } from 'vue'
import '~/components/ResourceCard.vue';

const startDate = ref('');
const endDate = ref('');

//set dates initially
onMounted(() => {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  startDate.value = sevenDaysAgo.toISOString().slice(0, 10);
  endDate.value = today.toISOString().slice(0, 10);
});


const resourceInfoCards: ResourceInfoCard[] = [
    { id: 1, title: 'Day one', image: '/resource-vid-thumb.jpg', description: 'Combined Mathematics', date: "2023-3-10" },
    { id: 2, title: 'Day two', image: '/resource-vid-thumb.jpg', description: 'Physics', date: "2023-3-10" },
    { id: 3, title: 'Day three', image: '/resource-vid-thumb.jpg', description: 'Chemistry', date: "2023-3-10" },

]
</script>

<template>
    <h1>this is home for student class</h1>

    <div class="class-home ">
        <!-- date filter -->
        <div class="date-filter flex flex-row">
            <label for="from-date">From : </label>
            <input type="date" v-model="startDate"
                class="" />
            <label class="ml-14" for="to-date">To : </label>
            <input type="date" v-model="endDate" label ="to-date"
                class="" />
        </div>

        <div class="resource-cards">
            <ResourceCard v-for="resourceInfoCard in resourceInfoCards"
                :key="resourceInfoCard.id"
                :details="resourceInfoCard" />
        </div>



        <!-- resource cards -->
    </div>
</template>


<style lang="scss" scoped></style>
