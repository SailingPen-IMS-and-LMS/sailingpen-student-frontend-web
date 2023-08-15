<script setup lang="ts">
import { useAuthStore, useTutionClassesStore } from '~/stores'
import { api } from '~/api'

const router = useRouter()
const authStore = useAuthStore()
const tutionClassesStore = useTutionClassesStore()

onMounted(async () => {
  await api.auth.refresh()
  const profile = await api.users.students.getProfile()
  authStore.setProfile(profile || null)
  if (!profile) {
    await router.replace('/auth/login')
  }

  else {
    const enrolledClasses = await api.tutionClasses.enrolled()
    tutionClassesStore.setLoadingEnrolledClasses(false)
    tutionClassesStore.setEnrolledClasses(enrolledClasses || [])
    // console.log(await api.users.tutors.getListForStudents())
  }

  setInterval(async () => {
    await api.auth.refresh()
  }, 1000 * 60 * 14.5)
})
</script>

<template>
  <RouterView />
</template>
