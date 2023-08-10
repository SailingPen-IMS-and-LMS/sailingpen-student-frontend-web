<script setup lang="ts">

import type { ResourceInfoCard } from '~/types';

defineProps<ResourceCardProps>();

interface ResourceCardProps {
    details: ResourceInfoCard;
}
</script>

<template>
    <div class="resource-info-card">
        <div
      :style="{
        backgroundImage: `url(${details.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0.5rem 0 0 0.5rem',
      }"
      class="w-[150px] h-[150px]"
        />
        
    </div>
</template>

<style lang="scss" scoped>

</style>
