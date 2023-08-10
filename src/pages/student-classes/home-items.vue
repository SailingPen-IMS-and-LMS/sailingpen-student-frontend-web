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
    { id: 1, title: 'Introduction to Permutations and Combinations Recording ', image: '/resource-vid-thumb.jpg', description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields', date: "2023-3-10" },
    { id: 2, title: 'Introduction to Permutations and Combinations Recording ', image: '/resource-vid-thumb.jpg', description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields', date: "2023-3-10" },
    { id: 3, title: 'Introduction to Permutations and Combinations Recording ', image: '/resource-vid-thumb.jpg', description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields', date: "2023-3-10" },

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
