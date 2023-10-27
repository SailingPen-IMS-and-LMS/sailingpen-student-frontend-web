<script setup lang="ts">
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  to: string
  text: string
  isSidebarOpen: boolean
  isButton?: boolean
}>()

const { to, text, isSidebarOpen, isButton } = toRefs(props)

const route = useRoute()

const activeClass = computed(() => {
  return route.fullPath.startsWith(props.to) && props.to !== '/' ? 'sidebar-link--active' : ''
})
</script>

<template>
  <button v-if="isButton" class="sidebar-link flex items-center gap-4 px-4 py-2">
    <slot name="icon" />
    <span v-if="isSidebarOpen">{{ text }}</span>
  </button>
  <RouterLink
    v-else :to="to" class="sidebar-link flex items-center gap-4 px-4 py-2"
    exact-active-class="sidebar-link--active" active-class="sidebar-link--active" :exact="to === '/'"
    :class="activeClass"
  >
    <slot name="icon" />
    <Transition name="sidebar-link-text">
      <span v-if="isSidebarOpen">{{ text }}</span>
    </Transition>
  </RouterLink>
</template>

<style lang="scss" scoped>
.sidebar-link {
  transition: all 200ms;
  border-radius: 8px;
//   width: 100%;

  &:hover {
    background-color: var(--n-color-primary-200-transparent);
  }

  &:active {
    background-color: var(--n-color-primary-600-transparent);
  }

  &--active {
    background-color: var(--n-color-primary-400);
    color: #fff;

    &:hover {
      background-color: var(--n-color-primary-400);
    }

    &:active {
      background-color: var(--n-color-primary-400);
    }
  }

  span {
    // prevent text from wrapping
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
}

.sidebar-link-text-enter-active {
  transition: all 200ms;
}

.sidebar-link-text-enter-from, .sidebar-link-text-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.sidebar-link-text-enter-to, .sidebar-link-text-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
