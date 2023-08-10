<script setup lang="ts">

import type { ResourceInfoCard } from '~/types';

defineProps<ResourceCardProps>();

interface ResourceCardProps {
    details: ResourceInfoCard;
}
</script>

<template>
    <div class="resource-info-card rounded-lg mb-10"
    >

        <h3 class="resource-date my-2">
                {{ details.date }}
        </h3>

        <div class="resource-tum-content flex gap-4 rounded-lg px-3"
        style="box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.045);">
            <div
            class="w-[750px] h-[200px] resource-image"
            :style="{
                backgroundImage: `url(${details.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
            }"

            />
            <div class="mr-4 resource-content mx-9">
                <div class=" mb-6">
                    <div class="flex justify-between items-center">
                        <h3 class="resource-title mb-6 text-xl font-medium pt-2">
                            {{ details.title }}
                        </h3>
                        <!-- insert a check box -->
                        <input type="checkbox" id="check" name="check" value="check">
                    </div>
                    <span class="resource-desc text-[0.9rem] font-[300]">
                        {{ details.description }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
