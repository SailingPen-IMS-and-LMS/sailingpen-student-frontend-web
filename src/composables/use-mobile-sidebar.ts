import { ref } from 'vue'

const isMobileSidebarOpen = ref(false)

export function useMobileSidebar() {
  function toggleMobileSidebar() {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value
  }

  return {
    isMobileSidebarOpen,
    toggleMobileSidebar,
  }
}
