<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NButton, NInput } from '@nethren-ui/vue'
import { api } from '~/api'
import type { LoginDto } from '~/types'
import { useAuthStore } from '~/stores'

const { t } = useI18n()
const router = useRouter()
const authStore = useAuthStore()

const isLoading = ref(false)

const loginFormData: Ref<LoginDto> = ref({
  username: '',
  password: '',
//   remember_m: false,
})

async function handleLoginFormSubmit() {
  isLoading.value = true
  try {
    await api.auth.studentLogin(loginFormData.value)
    const profile = await api.users.students.getProfile()
    authStore.setProfile(profile || null)
    if (profile)
      await router.replace('/')
  }
  catch (e) {
    console.log(e)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex">
    <div class="h-screen w-[45vw] flex items-center justify-center">
      <form class="w-[450px] flex flex-col gap-4 rounded-lg p-4" @submit.prevent="handleLoginFormSubmit">
        <h2 class="login-message text-5xl">
          Welcome Back !
        </h2>
        <NInput
          id="username"
          v-model="loginFormData.username"
          label="Username"
          placeholder="Enter your username"
          name="username"
          type="text"
        />
        <NInput
          id="password"
          v-model="loginFormData.password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          name="password"
        />
        <!-- <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <NCheckbox
              id="remember-me"
              v-model="loginFormData."
              aria-label="Remember me"
              name="remember-me"
            />
            <label for="remember-me">Remember Me</label>
          </div>
          <a href="#" class="text-blue-600">Forgot Password</a>
        </div> -->

        <!-- <p v-html="username" /> -->
        <!-- <div class="flex flex-col gap-2">
        <label for="username">username</label>
        <input type="username" id="username" name="username" class="p-2 rounded-sm">
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Password </label>
        <input type="password" id="password" name="password" class="p-2 rounded-sm">
      </div> -->
        <NButton :is-loading="isLoading" loading-text="Submitting">
          {{ t('auth.login') }}
        </NButton>

        <p>
          Don't have an account?
          <RouterLink to="/auth/register" class="text-blue-600">
            Sign up
          </RouterLink>
        </p>
      </form>
    </div>

    <div class="hidden h-screen h-screen w-[55vw] md:block">
      <img
        src="../../assets/images/student-login-image.webp"
        class="h-[100%]"
        alt=""
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-message {
  font-family: 'Norican', cursive;
  // font-size: 2rem;
  text-align: center;
}

.login-input {
  label {
    font-weight: 500;
  }
}
</style>

<route lang="yml">
meta:
  layout: auth
</route>
