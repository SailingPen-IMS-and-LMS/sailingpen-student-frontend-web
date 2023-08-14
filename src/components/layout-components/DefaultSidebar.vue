<script setup lang="ts">
import logoImgUrl from '~/assets/images/logo.png'
import type { SidebarItems } from '~/types'

const props = defineProps<{
  sidebarLinks: SidebarItems
}>()

const { sidebarLinks } = toRefs(props)
const { isSidebarOpen } = useSidebar()
</script>

<template>
  <aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">
    <img :src="logoImgUrl" alt="">
    <nav class="h-[calc(100vh-88px)] flex flex-col justify-between">
      <ul>
        <SidebarLink
          v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to"
          :text="sidebarLink.text" :is-sidebar-open="isSidebarOpen"
        >
          <template #icon>
            <ic-round-dashboard v-if="sidebarLink.text === 'Dashboard'" />
            <ic-sharp-menu-book v-else-if="sidebarLink.text === 'Lesson packs'" />
            <fa6-solid-users-line v-else-if="sidebarLink.text === 'Classes'" />
            <healthicons-i-exam-multiple-choice-negative v-else-if="sidebarLink.text === 'Exams'" />
            <mdi-cards v-else-if="sidebarLink.text === 'Flash Cards'" />
          </template>
        </SidebarLink>
      </ul>

      <ul class="bottom-links">
        <SidebarLink to="/logout" text="Logout" :is-sidebar-open="isSidebarOpen" :is-button="true">
          <template #icon>
            <ph-sign-out-bold />
          </template>
        </SidebarLink>

        <SidebarLink to="/help" text="Help" :is-sidebar-open="isSidebarOpen">
          <template #icon>
            <mdi-help-circle />
          </template>
        </SidebarLink>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss">
.default-sidebar {
    width: 225px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    // display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 300ms ease-in-out;
    background-color: var(--bg-primary);
    display: none;

    @include mq(lg) {
        display: flex;
    }

    img {
        width: 200px;
        height: 60px;
        margin-top: 1.5rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
    }

    &--close {
        width: 100px;
    }

}
</style>
