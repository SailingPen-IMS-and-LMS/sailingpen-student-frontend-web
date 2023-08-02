<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NButton, NCheckbox, NInput } from '@nethren-ui/vue'

const { t } = useI18n()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
</script>

<template>
  <div class="flex">
    <div class="h-screen w-[45vw] flex items-center justify-center">
      <form action="" class="w-[450px] flex flex-col gap-4 rounded-lg p-4">
        <h2 class="login-message text-5xl">
          Welcome Back !
        </h2>
        <NInput
          id="email"
          v-model="email"
          label="Email"
          placeholder="Enter your email address"
          name="email"
          type="email"
        />
        <NInput
          id="password"
          v-model="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          name="password"
        />
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <NCheckbox
              id="remember-me"
              v-model="rememberMe"
              aria-label="Remember me"
              name="remember-me"
            />
            <label for="remember-me">Remember Me</label>
          </div>
          <a href="#" class="text-blue-600">Forgot Password</a>
        </div>

        <p v-html="email" />
        <!-- <div class="flex flex-col gap-2">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" class="p-2 rounded-sm">
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Password </label>
        <input type="password" id="password" name="password" class="p-2 rounded-sm">
      </div> -->
        <NButton>
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
