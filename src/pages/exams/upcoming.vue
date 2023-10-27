<script setup lang="ts">
import UpcomingExamCard from '~/components/UpcomingExamCard.vue'
</script>

<template>
  <div>
    <UpcomingExamCard
      :details="{ name: 'Electronics Model Paper', paperNumber: 8, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }"
    />

    <UpcomingExamCard
      :details="{ name: 'Motion Model Paper', paperNumber: 9, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }"
    />
  </div>
</template>
