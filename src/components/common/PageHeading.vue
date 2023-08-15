<script setup lang="ts">
defineOptions({
  name: 'PageHeading',
})
</script>

<template>
  <h1 class="text-2xl font-semibold flex items-center gap-4">
    <button v-if="$route.fullPath !== '/'" @click="$router.back()">
      <ic-round-arrow-back />
    </button>
    <slot />
  </h1>
</template>
