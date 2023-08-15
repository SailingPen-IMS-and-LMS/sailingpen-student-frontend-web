<script setup lang="ts">
import SidebarLink from '../SidebarLink.vue'
import { useSidebar } from '~/composables'
import logoImgUrl from '~/assets/images/logo.png'
import shortLogoImgUrl from '~/assets/images/short-logo.png'
import type { SidebarItems } from '~/types'

const props = defineProps<{
  sidebarLinks: SidebarItems
}>()

const { sidebarLinks } = toRefs(props)
const { isSidebarOpen } = useSidebar()
</script>

<template>
  <aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">
    <img v-show="isSidebarOpen" :src="logoImgUrl" alt="SailingPen Logo" class="mx-auto min-w-[225px] px-[1rem]">
    <img v-show="!isSidebarOpen" :src="shortLogoImgUrl" alt="SailingPen short logo" class="mx-auto">
    <nav class="h-[calc(100vh-88px)] flex flex-col justify-between">
      <ul>
        <SidebarLink
          v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to"
          :text="sidebarLink.text" :is-sidebar-open="isSidebarOpen"
        >
          <template #icon>
            <ic-round-dashboard v-if="sidebarLink.text === 'Dashboard'" class="w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
            <ic-sharp-menu-book v-else-if="sidebarLink.text === 'Lesson packs'" class="w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
            <fa6-solid-users-line v-else-if="sidebarLink.text === 'Classes'" class="w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
            <ph-exam v-else-if="sidebarLink.text === 'Exams'" class="w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
            <mdi-cards v-else-if="sidebarLink.text === 'Flash Cards'" class="w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
          </template>
        </SidebarLink>
      </ul>

      <ul class="bottom-links">
        <SidebarLink to="/logout" text="Logout" :is-sidebar-open="isSidebarOpen" :is-button="true">
          <template #icon>
            <ph-sign-out-bold class="w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
          </template>
        </SidebarLink>

        <SidebarLink to="/help" text="Help" :is-sidebar-open="isSidebarOpen">
          <template #icon>
            <mdi-help-circle class="w-[24px] h-[24px] min-w-[24px] min-h-[24px]" />
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
    // align-items: center;
    transition: all 200ms ease-in-out;
    background-color: var(--bg-primary);
    display: none;

    @include mq(lg) {
        display: flex;
    }

    img {
        // width: 200px;
        // height: 60px;
        // margin-top: 1.5rem;
    }

    nav {
        padding-inline: 1rem;
        // margin-top: 60px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
    }

    &--close {
        width: 88px;
    }

}
</style>
