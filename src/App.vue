<script setup lang="ts">
import { api } from './api'

onMounted(async () => {
  await api.auth.refresh()
  await api.users.students.getProfile()
  setInterval(async () => {
    await api.auth.refresh()
  }, 2000)
})
</script>

<template>
  <RouterView />
</template>
