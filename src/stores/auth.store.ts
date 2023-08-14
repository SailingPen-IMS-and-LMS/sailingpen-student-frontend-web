import { defineStore } from 'pinia'
import type { StudentProfile } from '~/types'

export interface AuthState {
  profile: StudentProfile | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    profile: null,
  }),

  getters: {
    isAuthenticated: (state) => { return !!state.profile },

    fullName: (state) => {
      if (!state.profile)
        return ''
      return `${state.profile.f_name} ${state.profile.l_name}`
    },

  },

  actions: {
    setProfile(profile: StudentProfile | null) {
      this.profile = profile
    },
  },
})
