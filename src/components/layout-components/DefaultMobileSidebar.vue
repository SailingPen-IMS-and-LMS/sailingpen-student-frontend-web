<script setup lang="ts">
import SidebarLink from '../SidebarLink.vue'
import { useMobileSidebar } from '~/composables'
import logoImgUrl from '~/assets/images/logo.png'
import type { SidebarItems } from '~/types'

const props = defineProps<{
  sidebarLinks: SidebarItems
}>()

const { sidebarLinks } = toRefs(props)

const { isMobileSidebarOpen, toggleMobileSidebar } = useMobileSidebar()
</script>

<template>
  <Teleport to="body">
    <Transition name="ms">
      <aside v-if="isMobileSidebarOpen" class="default-mobile-sidebar lg:hidden">
        <img :src="logoImgUrl" alt="" class="items-center">

        <nav class="h-[calc(100vh-88px)] flex flex-col justify-between">
          <ul>
            <SidebarLink
              v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to"
              :text="sidebarLink.text" :is-sidebar-open="isMobileSidebarOpen" class="text-[1.2rem]"
            >
              <template #icon>
                <material-symbols-dashboard v-if="sidebarLink.text === 'Dashboard'" class="text-[1.5rem]" />
                <ic-sharp-menu-book v-else-if="sidebarLink.text === 'Lesson packs'" class="text-[1.5rem]" />
                <fa6-solid-users-line v-else-if="sidebarLink.text === 'Classes'" class="text-[1.5rem]" />
                <healthicons-i-exam-multiple-choice-negative
                  v-else-if="sidebarLink.text === 'Exams'"
                  class="text-[1.5rem]"
                />
                <mdi-cards v-else-if="sidebarLink.text === 'Flash Cards'" class="text-[1.5rem]" />
              </template>
            </SidebarLink>
          </ul>

          <ul class="bottom-links">
            <SidebarLink
              to="/logout" text="Logout" :is-sidebar-open="isMobileSidebarOpen" class="text-[1.2rem]"
              :is-button="true"
            >
              <template #icon>
                <ph-sign-out-bold class="text-[1.5rem]" />
              </template>
            </SidebarLink>

            <SidebarLink to="/help" text="Help" :is-sidebar-open="isMobileSidebarOpen" class="text-[1.2rem]">
              <template #icon>
                <mdi-help-circle class="text-[1.5rem]" />
              </template>
            </SidebarLink>
          </ul>
        </nav>
      </aside>
    </Transition>
  </Teleport>
  <Teleport to="body">
    <Transition name="msb">
      <div v-if="isMobileSidebarOpen" class="default-mobile-sidebar__background" @click="toggleMobileSidebar" />
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.default-mobile-sidebar{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 75vw;
    background-color: var(--bg-secondary);
    z-index: 1001;

    @include mq(sm) {
        width: 65vw;
    }

    @include mq(md) {
        width: 50vw;
    }
}

.ms-enter-from, .ms-leave-to{
    transform: translateX(-100%);
}

.ms-enter-to, .ms-leave-from{
    transform: translateX(0);
}

.ms-enter-active ,.ms-leave-active{
    transition: all 200ms ease-in-out;
}

.default-mobile-sidebar__background{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-x: hidden;
    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;

}
</style>
