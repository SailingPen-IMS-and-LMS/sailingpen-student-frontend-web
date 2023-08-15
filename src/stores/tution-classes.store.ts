import { defineStore } from 'pinia'
import type { EnrolledClasses } from '~/types'

export interface TutionClassesState {
  enrolledClasses: EnrolledClasses
  loadingEnrolledClasses: boolean
}

export const useTutionClassesStore = defineStore('tution-classes', {
  state: (): TutionClassesState => ({
    enrolledClasses: [],
    loadingEnrolledClasses: true,
  }),

  getters: {
    isNotEnrolledInAnyClass: (state) => {
      return state.enrolledClasses.length === 0
    },
  },

  actions: {
    setEnrolledClasses(classes: EnrolledClasses) {
      this.enrolledClasses = classes
    },

    setLoadingEnrolledClasses(loading: boolean) {
      this.loadingEnrolledClasses = loading
    },
  },
})
