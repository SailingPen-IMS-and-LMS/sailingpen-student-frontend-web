<script setup lang="ts">
import type { StoreViewCardDetails } from '~/types'

interface StoreViewCardProps {
  details: StoreViewCardDetails
}

defineProps<StoreViewCardProps>()
</script>

<template>
  <RouterLink
    class="m-[1rem] flex text-white" style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);"
    :style="{
      backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${details.image})`,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0.5rem',
    }
    "
    to="#"
  >
    <div class="mx-[1rem] ">
      <div class="m-2">
        <h3 class="font-semibold text-lg">
          {{ details.heading }}
        </h3>
        <h4 class="mt-4 text-justify">
          {{ details.description }}
        </h4>
      </div>
    </div>
  </RouterLink>
</template>
