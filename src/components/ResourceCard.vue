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
        <div class="mr-4 resource-content">
            <div class=" mb-6">
                <h3 class="resource-title">
                    {{ details.title }}
                </h3>
                <span class="resource-desc text-[0.9rem] font-[300]">
                    {{ details.description }}
                </span>
                <h3 class="resource-date">
                    {{ details.date }}
                </h3>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

</style>
