<script setup lang="ts">
import NotEnrolledClassCard from './NotEnrolledClassCard.vue'
import { api } from '~/api'
import { useClasslistSidebar } from '~/composables'
import type { NotEnrolledClasses } from '~/types'

const emit = defineEmits<{
  enroll: [payload: void]
}>()

const { isClasslistSidebarOpen, closeClasslistSidebar, tutorId } = useClasslistSidebar()

const loading = ref(true)
const notEnrolledClasses = ref<NotEnrolledClasses>([])

watch(tutorId, async (newVal, oldVal) => {
  if (newVal !== oldVal) {
    loading.value = true
    try {
      const result = await api.tutionClasses.notEnrolled(newVal)
      console.log(result)
      if (result)
        notEnrolledClasses.value = result
    }
    catch (e) {
      console.log(e)
    }
    finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="cs">
      <aside
        v-if="isClasslistSidebarOpen" class="classlist-sidebar"
        :class="[loading || notEnrolledClasses.length === 0 ? 'classlist-sidebar--empty' : '']"
      >
        <button class="absolute top-4 left-4 cursor-pointer text-xl" @click="closeClasslistSidebar">
          <ic-round-close />
        </button>
        <svg-spinners-180-ring v-if="loading" class="text-4xl" />
        <div v-else-if="!loading && notEnrolledClasses.length > 0" class="classlist-gallery mt-8">
          <NotEnrolledClassCard
            v-for="notEnrolledClass in notEnrolledClasses" :key="notEnrolledClass.class_id"
            :class-info="notEnrolledClass" @enroll="() => { closeClasslistSidebar(); emit('enroll') }"
          />
        </div>
        <p v-else-if="!loading && notEnrolledClasses.length === 0" class="text-2xl w-3/5 text-center">
          You attend all the classes by this tutor.
        </p>
      </aside>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.classlist-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 450px;
    max-width: 75vw;
    background-color: var(--bg-secondary);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1001;

    nav {
        padding-inline: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
    }

    &--empty {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.classlist-gallery {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    overflow-y: auto;
    height: 100%;
}
</style>
