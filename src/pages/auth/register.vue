<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NButton, NCheckbox, NInput } from '@nethren-ui/vue'
import type { RegisterDto } from '~/types'
import { api } from '~/api'

const { t } = useI18n()
const router = useRouter()

const avatarPath = ref('')

const registerFormData: Ref<RegisterDto> = ref({
  f_name: '',
  l_name: '',
  email: '',
  nic: '',
  school: '',
  dob: '',
  parent_contact_no: '',
  address: '',
  password: '',
  confirm_password: '',
  contact_no: '',
  avatar: null,
  terms: false,
})

function onFileSelect(e: Event) {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (files && files[0]) {
    const file = files[0]
    registerFormData.value.avatar = file
  }
}

const isLoading = ref(false)

async function handleRegisterFormSubmit() {
  isLoading.value = true
  try {
    console.log(registerFormData.value)
    const result = await api.auth.studentRegister(registerFormData.value)
    console.log(`Result: ${result}`)
    if (result)
      await router.replace('/auth/login')
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
  <div class="signup-page h-screen" :style="{ overflow: 'hidden' }">
    <div class="hidden h-screen lg:block">
      <img
        src="../../assets/images/student-signup-image.webp" class="h-full w-full" alt="signup-image" :style="{
          objectFit: 'cover',
        }"
      >
    </div>

    <div class="signup-page__right h-screen px-2 py-4 lg:px-8 md:px-4" :style="{ overflowY: 'auto' }">
      <form action="" class="shadow-6xl flex flex-col gap-4 rounded-lg rounded-lg p-4" @submit.prevent="handleRegisterFormSubmit">
        <h1 class="signup-message text-5xl">
          Let's get started !
        </h1>

        <p class="py-2 text-gray-400">
          Let's get you all setup so you can verify your personal account and begin set up your profile.
        </p>

        <div class="flex flex-col gap-4 md:(flex-row gap-8)">
          <NInput
            id="first-name" v-model="registerFormData.f_name" required label="First Name"
            placeholder="Enter your First Name" name="first-name" type="text" class="w-[100%]"
          />

          <NInput
            id="last-name" v-model="registerFormData.l_name" required label="Last Name"
            placeholder="Enter your Last Name" name="last-name" type="text" class="w-[100%]"
          />
        </div>

        <div class="flex flex-col gap-4 md:(flex-row gap-8)">
          <NInput
            id="email-address" v-model="registerFormData.email" required label="Email Address"
            placeholder="Enter your Email Address" name="email-address" type="email" class="w-[100%]"
          />

          <NInput
            id="nic" v-model="registerFormData.nic" required label="NIC" placeholder="Enter your NIC"
            name="nic" type="text" class="w-[100%]"
          />
        </div>

        <div class="flex flex-col gap-4 md:(flex-row gap-8)">
          <NInput
            id="school" v-model="registerFormData.school" required label="School"
            placeholder="Enter your School" name="school" type="text" class="w-[100%]"
          />

          <NInput
            id="dob" v-model="registerFormData.dob" required label="Date of Birth"
            placeholder="Enter your Date of Birth" name="dob" type="date" class="w-[100%]"
          />
        </div>

        <div class="flex flex-col gap-4 md:(flex-row gap-8)">
          <NInput
            id="contact-number" v-model="registerFormData.contact_no" required label="Contact Number"
            placeholder="Enter your Contact Number" name="contact-number" type="text" class="w-[100%]"
          />

          <NInput
            id="parent-mobile" v-model="registerFormData.parent_contact_no" required
            label="Parent Contact Number" placeholder="Enter your Parent Contact Number" name="parent-mobile"
            type="text" class="w-[100%]"
          />
        </div>

        <div>
          <NInput
            id="address" v-model="registerFormData.address" required label="Address"
            placeholder="Enter your Address" name="address" type="text" class="w-[100%]"
          />
        </div>

        <div>
          <NInput
            id="avatar" v-model="avatarPath" required label="Profile picture"
            placeholder="Select profile photo" name="avatar" type="file" class="w-[100%]" @change="onFileSelect"
          />
        </div>

        <div class="flex flex-col gap-4 md:(flex-row gap-8)">
          <NInput
            id="password" v-model="registerFormData.password" required label="Password"
            placeholder="Enter your Password" name="password" type="password" class="w-[100%]"
            :with-visibility-toggle="true"
          />

          <NInput
            id="confirm-password" v-model="registerFormData.confirm_password" required
            label="Confirm Password" placeholder="Confirm your Password" name="confirm-password" type="password"
            class="w-[100%]" :with-visibility-toggle="true"
          />
        </div>

        <div class="flex items-center gap-2 py-2">
          <NCheckbox id="terms" v-model="registerFormData.terms" aria-label="terms" name="terms" required />
          <label for="terms">I agree to all the
            <RouterLink to="#" class="text-blue-600">Terms & Privacy Policy
            </RouterLink>
          </label>
        </div>

        <NButton class="items-center justify-center" :is-loading="isLoading" loading-text="Submitting">
          {{ t('auth.register') }}
        </NButton>

        <p>
          Already have an account?
          <RouterLink to="/auth/login" class="text-blue-600">
            Sign in
          </RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signup-message {
    font-family: 'Norican', cursive;
    // font-size: 2rem;
    text-align: center;
}

.signup-page {
    display: grid;
    grid-template-columns: 1fr;

    @include mq(lg) {
        grid-template-columns: 45vw 55vw;
    }

    &__right {
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar {
            width: 0.5rem;
            background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
            background-color: var(--n-color-primary-200);
        }
    }
}

@media screen and (min-width: 1024px) {
    .signup-page {
        grid-template-columns: 45vw 55vw;

    }
}
</style>

<route lang="yml">
meta:
  layout: auth
</route>
