<script setup>
const props = defineProps(['active'])
</script>

<template>
  <div ref="tabs" class="tab" :class="(active == 'true') ? 'active' : '' ">
    <slot />
  </div>
</template>

<style>
  .tab {
    display: none;
  }
  .tab.active {
    display: block;
  }
</style>
