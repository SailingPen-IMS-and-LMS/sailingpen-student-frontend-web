import { ref } from 'vue'

const isClasslistSidebarOpen = ref(false)
const tutorId = ref(0)

export function useClasslistSidebar() {
  function toggleClasslistSidebar(tutor_id?: number) {
    isClasslistSidebarOpen.value = !isClasslistSidebarOpen.value
    if (tutor_id)
      tutorId.value = tutor_id
  }

  return {
    isClasslistSidebarOpen,
    toggleClasslistSidebar,
    tutorId,
  }
}
