<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHeading from '~/components/common/PageHeading.vue'

const route = useRoute()

const currentTab = computed(() => {
  return route.path.split('/').pop() as 'upcoming' | 'history'
})

// const currentTab = ref<'home' | 'announcements' | 'quizzes'>(lastSegmentOfPath.value)
</script>

<template>
  <div class="class-home-page">
    <PageHeading>
      Exams
    </PageHeading>
    <div class="tabs-header flex items-center gap-4 mt-4">
      <RouterLink
        to="/exams/upcoming" class="tab-link"
        :class="currentTab === 'upcoming' ? 'tab-link--active' : ''"
      >
        Upcoming Exams
      </RouterLink>
      <RouterLink
        to="/exams/history" class="tab-link"
        :class="currentTab === 'history' ? 'tab-link--active' : ''"
      >
        History
      </RouterLink>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.tab-link {
    padding: 0.5rem 2rem;
    transition: all 0.3s ease-out;
    border-bottom: 4px solid rgba(0, 0, 0, 0);

    &:hover {
        border-bottom: 4px solid var(--n-color-primary-200-transparent);
    }
    &--active {
        border-bottom: 4px solid var(--n-color-primary-400);

        &:hover {
            border-bottom: 4px solid var(--n-color-primary-400);
        }
    }

}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-out;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-enter-from {
    transform: translateX(-300px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(300px);
    opacity: 0;
}

.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>
