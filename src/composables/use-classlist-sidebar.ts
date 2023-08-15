import { ref } from 'vue'

const isClasslistSidebarOpen = ref(false)
const tutorId = ref('')

export function useClasslistSidebar() {
  function activateClasslistSidebar(tutor_id?: string) {
    isClasslistSidebarOpen.value = true
    if (tutor_id)
      tutorId.value = tutor_id

    console.log(isClasslistSidebarOpen.value)
  }

  function closeClasslistSidebar() {
    isClasslistSidebarOpen.value = false
    tutorId.value = ''
  }

  return {
    isClasslistSidebarOpen,
    activateClasslistSidebar,
    closeClasslistSidebar,
    tutorId,
  }
}
