<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import StoreViewCard from './StoreViewCard.vue'
import { useLessonPackSidebar } from '~/composables'

const { closeLessonPackSidebar, isLessonPackSidebarOpen } = useLessonPackSidebar()
</script>

<template>
  <Teleport to="body">
    <Transition name="cs">
      <aside v-if="isLessonPackSidebarOpen" class="fixed top-0 bottom-0 right-0 w-[600px] shadow-xl bg-white">
        <button class="absolute top-4 left-4 cursor-pointer text-xl" @click="closeLessonPackSidebar">
          <ic-round-close />
        </button>
        <p class="font-semibold text-lg p-[1rem] mt-[1.5rem] mb-[0.5rem]">
          2023 - Biology Theory - March
        </p>
        <p class="px-[1.5rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae ut, earum laudantium,
          odit dolore ea ab cum, dolor rem velit fugit assumenda voluptates. Aspernatur sint qui asperiores aperiam
          perspiciatis.
        </p>

        <StoreViewCard
          :details="{
            image: '/store-view-1.jfif',
            heading: '2023 - Theory New Class 2023/03/02',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae ut, earum laudantium odit dolore ea ab cum, dolor rem velit fugit',
          }"
        />

        <StoreViewCard
          :details="{
            image: '/store-view-1.jfif',
            heading: '2023 - Theory New Class 2023/03/02',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae ut, earum laudantium odit dolore ea ab cum, dolor rem velit fugit',
          }"
        />

        <StoreViewCard
          :details="{
            image: '/store-view-1.jfif',
            heading: '2023 - Theory New Class 2023/03/02',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae ut, earum laudantium odit dolore ea ab cum, dolor rem velit fugit',
          }"
        />

        <div class="px-[5rem] py-[1rem] flex justify-between">
          <NButton>Buy Now</NButton>
          <NButton>Add to cart</NButton>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>
