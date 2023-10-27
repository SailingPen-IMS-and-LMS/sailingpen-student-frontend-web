<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMobileSidebar, useSidebar } from '~/composables'
import { useAuthStore } from '~/stores'

const { toggleMobileSidebar } = useMobileSidebar()
const { toggleSidebar } = useSidebar()

const route = useRoute()

const authStore = useAuthStore()
const { profile, fullName } = storeToRefs(authStore)
</script>

<template>
  <header class="default-header flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button class="text-[1.5rem] lg:hidden" @click="toggleMobileSidebar">
        <iconamoon-menu-burger-horizontal-bold />
      </button>
      <button class="text-[1.5rem] hidden lg:inline-block" @click="toggleSidebar">
        <iconamoon-menu-burger-horizontal-bold />
      </button>
      <h1 v-if="route.path === '/' && profile" class="hidden lg:block text-2xl font-bold lg:block">
        {{
          `Hello ${profile.f_name} !`
        }}
      </h1>
    </div>
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

      <p v-if="profile" class="hidden lg-block">
        {{
          fullName
        }}
      </p>

      <img v-if="profile" :src="profile.avatar || undefined" alt="" class="h-[50px] w-[50px] rounded-full">
    </div>
  </header>
</template>

<style lang="scss" scoped>
.default-header {
    grid-row: 1 / 2;
    height: 60px;
    padding-inline: 1rem;

    @include mq(lg) {
        padding-inline: 2rem;
        grid-column: 2 / 3;
    }
}
</style>
