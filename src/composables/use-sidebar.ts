import { ref } from 'vue'

const isSidebarOpen = ref(false)
export function useSidebar() {
  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return {
    isSidebarOpen,
    toggleSidebar,
  }
}
