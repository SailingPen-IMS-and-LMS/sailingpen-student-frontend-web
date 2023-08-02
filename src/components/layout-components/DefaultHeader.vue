<script setup lang="ts">
import logoImageURL from '~/assets/images/student-profile.jpg'

const { toggleMobileSidebar } = useMobileSidebar()
const { isSidebarOpen, toggleSidebar } = useSidebar()
</script>

<template>
  <header class="default-header flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button class="text-[1.5rem] lg:hidden" @click="toggleMobileSidebar">
        <iconamoon-menu-burger-horizontal-bold />
      </button>
      <button class="text-[1.5rem] hidden lg:inline-block" @click="toggleSidebar">
        <maki-cross v-if="isSidebarOpen" />
        <iconamoon-menu-burger-horizontal-bold v-else />
      </button>
      <h1 class="text-2xl font-bold lg:block">
        Hello Semini
      </h1>
    </div>
    <!-- <img src="../assets/images/logo.png" class="h-15" alt=""> -->

    <div class="flex items-center gap-4">
      <button>
        <material-symbols-notifications class="text-[1.3rem]" />
      </button>
      <button>
        <material-symbols-shopping-cart-outline-rounded class="text-[1.3rem]" />
      </button>
      <button>
        <material-symbols-toggle-off-outline class="text-[1.3rem]" />
      </button>

      <p class="hidden lg-block">
        Semini Dissanayaka
      </p>

      <img :src="logoImageURL" alt="" class="h-[50px] w-[50px] rounded-full">
    </div>
  </header>
</template>

<style lang="scss" scoped>
.default-header {
    grid-row: 1 / 2;
    height: 60px;
    padding-inline: 1rem;

    @include mq(lg){
        padding-inline: 2rem;
        grid-column: 2 / 3;
    }
}
</style>
