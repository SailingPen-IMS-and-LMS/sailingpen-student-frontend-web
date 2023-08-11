<script setup lang="ts">
import BrowseLessonPack from '~/components/BrowseLessonPack.vue'
</script>

<template>
  <div browse-lesson-pack-page>
    <div>
      <h2 class="font-semibold text-xl">
        Combined Mathematics - Ruwan Darshana
      </h2>

      <div class="lesson-pack-store">
        <BrowseLessonPack
          :details="{ image: '/lesson-pack-1.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-1.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-1.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-1.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-1.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />
      </div>
    </div>

    <div>
      <h2 class="font-semibold text-xl">
        Physics - Nilantha Jayasuriya
      </h2>

      <div class="lesson-pack-store">
        <BrowseLessonPack
          :details="{ image: '/lesson-pack-3.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-3.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-3.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-3.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-3.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />
      </div>
    </div>

    <div>
      <h2 class="font-semibold text-xl">
        Chemistry - Nirandhika Jayawardana
      </h2>

      <div class="lesson-pack-store">
        <BrowseLessonPack
          :details="{ image: '/lesson-pack-2.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-2.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-2.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-2.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />

        <BrowseLessonPack
          :details="{ image: '/lesson-pack-2.jpg', name: '2023 - Combined Mathematics (Theory)', month: 'January', price: '2000.00' }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lesson-pack-store{
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1rem;
}
</style>
