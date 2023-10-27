import { ref } from 'vue'

const isLessonPackSidebarOpen = ref(false)
const lessonPackId = ref('')

export function useLessonPackSidebar() {
  function activateLessonPackSidebar(lesson_pack_id?: string) {
    isLessonPackSidebarOpen.value = true
    if (lesson_pack_id)
      lessonPackId.value = lesson_pack_id

    console.log(isLessonPackSidebarOpen.value)
  }

  function closeLessonPackSidebar() {
    isLessonPackSidebarOpen.value = false
    lessonPackId.value = ''
  }

  return {
    isLessonPackSidebarOpen,
    activateLessonPackSidebar,
    closeLessonPackSidebar,
    lessonPackId,
  }
}
