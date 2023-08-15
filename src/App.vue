<script setup lang="ts">
import { useAuthStore } from '~/stores'
import { api } from '~/api'

const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  await api.auth.refresh()
  const profile = await api.users.students.getProfile()
  authStore.setProfile(profile || null)
  if (!profile)
    await router.replace('/auth/login')

  setInterval(async () => {
    await api.auth.refresh()
  }, 1000 * 60 * 14.5)
})
</script>

<template>
  <RouterView />
</template>
