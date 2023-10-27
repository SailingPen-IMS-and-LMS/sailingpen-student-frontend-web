<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useTutionClassesStore } from '~/stores'
import PageHeading from '~/components/common/PageHeading.vue'

const route = useRoute()
const params = route.params
const classId = params.classId as string

const tutionClassesStore = useTutionClassesStore()
const { enrolledClasses } = storeToRefs(tutionClassesStore)

const currentClass = computed(() => {
  return enrolledClasses.value.find(ec => ec.class_id === classId)
})

const currentTab = computed(() => {
  return route.path.split('/').pop() as 'home' | 'announcements' | 'quizzes'
})

// const currentTab = ref<'home' | 'announcements' | 'quizzes'>(lastSegmentOfPath.value)
</script>

<template>
  <div v-if="currentClass" class="class-home-page">
    <PageHeading>
      {{ currentClass.class_name }}
    </PageHeading>
    <div class="tabs-header flex items-center gap-4 mt-4">
      <RouterLink
        :to="`/classes/${currentClass?.class_id}/home`" class="tab-link"
        :class="currentTab === 'home' ? 'tab-link--active' : ''"
      >
        Home
      </RouterLink>
      <RouterLink
        :to="`/classes/${currentClass?.class_id}/announcements`" class="tab-link"
        :class="currentTab === 'announcements' ? 'tab-link--active' : ''"
      >
        Announcements
      </RouterLink>
      <RouterLink
        :to="`/classes/${currentClass?.class_id}/quizzes`" class="tab-link"
        :class="currentTab === 'quizzes' ? 'tab-link--active' : ''"
      >
        Quizzes
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
