<script setup lang="ts">
import ExamCardHistory from '~/components/ExamCardHistory.vue'
</script>

<template>
  <div>
    <ExamCardHistory
      :details="{ name: 'Motion MCQ Paper', paperNumber: 7, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }"
    />

    <ExamCardHistory
      :details="{ name: 'Motion Structured Paper', paperNumber: 6, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }"
    />

    <ExamCardHistory
      :details="{ name: 'Electronics Essay Paper', paperNumber: 5, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }"
    />

    <ExamCardHistory
      :details="{ name: 'Waves Model Paper', paperNumber: 4, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }"
    />

    <ExamCardHistory
      :details="{ name: 'Motion Model Paper', paperNumber: 3, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' }"
    />
  </div>
</template>
