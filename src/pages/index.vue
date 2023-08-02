<script setup lang="ts">
import SidebarLink from '~/components/SidebarLink.vue'
import MaterialSymbolsDashboard from '~icons/material-symbols/dashboard'
import IcSharpMenuBook from '~icons/ic/sharp-menu-book'
import Fa6SolidUsersLine from '~icons/fa6-solid/users-line'
import HealthiconsIExamMultipleChoiceNegative from '~icons/healthicons/i-exam-multiple-choice-negative'
import MdiCards from '~icons/mdi/cards'
import PhSignOutBold from '~icons/ph/sign-out-bold'
import MdiHelpCircle from '~icons/mdi/help-circle'
import IconamoonMenuBurgerHorizontalBold from '~icons/iconamoon/menu-burger-horizontal-bold'
import MakiCross from '~icons/maki/cross'

import MaterialSymbolsNotifications from '~icons/material-symbols/notifications'
import MaterialSymbolsShoppingCartOutlineRounded from '~icons/material-symbols/shopping-cart-outline-rounded'
import MaterialSymbolsToggleOffOutline from '~icons/material-symbols/toggle-off-outline'
import MaterialSymbolsEditDocumentRounded from '~icons/material-symbols/edit-document-rounded'
import MaterialSymbolsTrophy from '~icons/material-symbols/trophy'

const sidebarLinks: Array<{
  to: string
  text: string
}> = [
  {
    to: '/', text: 'Dashboard',
  },

  {
    to: '/lesson-packs', text: 'Lesson packs',
  },

  {
    to: '/classes', text: 'Classes',
  },

  {
    to: '/exams', text: 'Exams',
  },

  {
    to: 'flash-cards', text: 'Flash Cards',
  },

  // {
  //   to: 'logout', text: 'Logout',
  // },

  // {
  //   to: 'help', text: 'Help',
  // },

]

const isSidebarOpen = ref(true)
const isMobileSidebarOpen = ref(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function toggleMobileSidebar() {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value
}
</script>

<template>
    <div class="default-layout">
        <aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">
            <img src="../assets/images/logo.png" alt="">
            <button @click="toggleSidebar">
                <MakiCross v-if="isSidebarOpen" />
                <IconamoonMenuBurgerHorizontalBold v-else />
            </button>
            <nav class="navigation-bar flex flex-col justify-between">
                <ul>
                    <SidebarLink
v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to"
                        :text="sidebarLink.text" :is-sidebar-open="isSidebarOpen"
>
                        <template #icon>
                            <MaterialSymbolsDashboard v-if="sidebarLink.text === 'Dashboard'" />
                            <IcSharpMenuBook v-else-if="sidebarLink.text === 'Lesson packs'" />
                            <Fa6SolidUsersLine v-else-if="sidebarLink.text === 'Classes'" />
                            <HealthiconsIExamMultipleChoiceNegative v-else-if="sidebarLink.text === 'Exams'" />
                            <MdiCards v-else-if="sidebarLink.text === 'Flash Cards'" />
                        </template>
                    </SidebarLink>
                </ul>

                <ul class="bottom-links">
                    <SidebarLink to="/logout" text="Logout" :is-sidebar-open="isSidebarOpen">
                        <template #icon>
                            <PhSignOutBold />
                        </template>
                    </SidebarLink>

                    <SidebarLink to="/help" text="Help" :is-sidebar-open="isSidebarOpen">
                        <template #icon>
                            <MdiHelpCircle />
                        </template>
                    </SidebarLink>
                </ul>
            </nav>
        </aside>

        <header class="default-header flex items-center justify-between">
            <div class="flex items-center gap-4">
                <button class="text-[2rem] lg:hidden" @click="toggleMobileSidebar">
                    <IconamoonMenuBurgerHorizontalBold />
                </button>
                <h1 class="hidden text-2xl font-bold lg:block">
                    Hello Semini
                </h1>
            </div>
            <!-- <img src="../assets/images/logo.png" class="h-15" alt=""> -->

            <div class="flex items-center gap-4">
                <button>
                    <MaterialSymbolsNotifications class="text-[1.3rem]" />
                </button>
                <button>
                    <MaterialSymbolsShoppingCartOutlineRounded class="text-[1.3rem]" />
                </button>
                <button>
                    <MaterialSymbolsToggleOffOutline class="text-[1.3rem]" />
                </button>

                <p class="hidden lg-block">
                    Semini Dissanayaka
                </p>

                <img src="../assets/images/student-profile.jpg" alt="" class="profile-picture">
            </div>
        </header>
        <Teleport to="body">
            <Transition name="ms">
                <aside v-if="isMobileSidebarOpen" class="default-mobile-sidebar lg:hidden">
                    <img src="../assets/images/logo.png" alt="" class="items-center">

                    <nav class="navigation-bar flex flex-col justify-between">
                        <ul>
                            <SidebarLink
v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to"
                                :text="sidebarLink.text" :is-sidebar-open="isMobileSidebarOpen" class="text-[1.2rem]"
>
                                <template #icon>
                                    <MaterialSymbolsDashboard
v-if="sidebarLink.text === 'Dashboard'"
                                        class="text-[1.5rem]"
/>
                                    <IcSharpMenuBook
v-else-if="sidebarLink.text === 'Lesson packs'"
                                        class="text-[1.5rem]"
/>
                                    <Fa6SolidUsersLine v-else-if="sidebarLink.text === 'Classes'" class="text-[1.5rem]" />
                                    <HealthiconsIExamMultipleChoiceNegative
v-else-if="sidebarLink.text === 'Exams'"
                                        class="text-[1.5rem]"
/>
                                    <MdiCards v-else-if="sidebarLink.text === 'Flash Cards'" class="text-[1.5rem]" />
                                </template>
                            </SidebarLink>
                        </ul>

                        <ul class="bottom-links">
                            <SidebarLink
to="/logout" text="Logout" :is-sidebar-open="isMobileSidebarOpen"
                                class="text-[1.2rem]"
>
                                <template #icon>
                                    <PhSignOutBold class="text-[1.5rem]" />
                                </template>
                            </SidebarLink>

                            <SidebarLink
to="/help" text="Help" :is-sidebar-open="isMobileSidebarOpen"
                                class="text-[1.2rem]"
>
                                <template #icon>
                                    <MdiHelpCircle class="text-[1.5rem]" />
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

        <main class="default-page-container">
            <div class="top-left-container">
                <h2 class="font-semibold">
                    Continue Watching
                </h2>

                <div class="flex gap-2">
                    <!-- <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 1
                        </p>

                        <p>Measurements</p>

                        <p class="text-base">
                            Physics - Nilantha Jayasuriya
                        </p>

                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div> -->
                    <VideoThumbnail />
                    <VideoThumbnail />
                    <VideoThumbnail />

                    <!-- <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 1
                        </p>

                        <p>Measurements</p>

                        <p class="text-base">
                            Physics - Nilantha Jayasuriya
                        </p>

                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div>

                    <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 1
                        </p>

                        <p>Measurements</p>

                        <p class="text-base">
                            Physics - Nilantha Jayasuriya
                        </p>

                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div> -->
                </div>
            </div>

            <div class="middle-left-container">
                <div>
                    <h2 class="font-semibold">
                        Pinned
                    </h2>

                    <div class="flex gap-2">
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <VideoThumbnail />
                        <!-- <div class="continue-watch-video">
                            <p class="text-xs">
                                Unit - 6
                            </p>
                            <p>Trigonometric</p>
                            <p class="text-base">
                                Physics - Ruwan Darshana
                            </p>
                            <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                        </div>

                        <div class="continue-watch-video">
                            <p class="text-xs">
                                Unit - 6
                            </p>
                            <p>Trigonometric</p>
                            <p class="text-base">
                                Physics - Ruwan Darshana
                            </p>
                            <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                        </div>

                        <div class="continue-watch-video">
                            <p class="text-xs">
                                Unit - 6
                            </p>
                            <p>Trigonometric</p>
                            <p class="text-base">
                                Physics - Ruwan Darshana
                            </p>
                            <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                        </div> -->
                    </div>
                </div>
            </div>

            <div class="bottom-left-container">
                <h2 class="font-semibold">
                    Your Progress
                </h2>

                <div class="progress-container">
                    <img src="../assets/images/chart-1.jpg" class="px-7 py-3 shadow-md" alt="">
                </div>
            </div>

            <div class="right-side-container">
                <div class="top-right-container right-container bg-amber">
                    <img src="../assets/images/calendar.jpg" class="mx-auto shadow-md" alt="">
                </div>

                <div class="middle-right-container">
                    <h2 class="font-semibold">
                        Upcoming Events
                    </h2>

                    <div class="right-container shadow-md">
                        <div class="flex gap-2">
                            <MaterialSymbolsEditDocumentRounded class="text-2xl" />
                            <p>Physics Quiz No - 13 <span class="text-red-600">(Deadline 2023-08-02 11.55pm)</span></p>
                        </div>
                        <hr style="height:2px;border-width:0;color:gray;background-color:gray; margin: 1rem;">
                        <div class="flex gap-2">
                            <MaterialSymbolsEditDocumentRounded class="text-2xl" />
                            <p>
                                Chemistry Organic Activity <span class="text-red-600">(Deadline 2023-08-04 11.55pm)</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bottom-right-container">
                    <h2 class="font-semibold">
                        Achievements
                    </h2>

                    <div class="right-container shadow-md">
                        <div>
                            <MaterialSymbolsTrophy class="text-xl text-amber-500" />
                            <p class="font-medium">
                                Physics Quiz No - 12
                            </p>
                        </div>
                        <p class="indent-10">
                            Marks : 97%
                        </p>
                        <p class="indent-10">
                            Rank : 16
                        </p>
                        <hr style="height:2px;border-width:0;color:gray;background-color:gray; margin: 1rem;">

                        <div>
                            <MaterialSymbolsTrophy class="text-xl text-amber-500" />
                            <p class="font-medium">
                                Physics Quiz No - 12
                            </p>
                        </div>
                        <p class="indent-10">
                            Marks : 97%
                        </p>
                        <p class="indent-10">
                            Rank : 16
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped></style>
