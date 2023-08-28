<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import Question from '~/components/Question.vue'
import QuizNavigation from '~/components/QuizNavigation.vue'
</script>

<template>
  <div class="questions-page flex items-start gap-6">
    <div class="flex gap-6">
      <Question
        :details="{
          questionNumber: 1,
          marks: 10,
          question: ' In the realm of renewable energy, what multifaceted factors wield a substantial impact on the operational efficiency and output of solar panels within a photovoltaic system?',
          answerNumber1: 'A',
          answer1: 'The prevailing ambient temperature and relative humidity levels in the installation area.',
          answerNumber2: 'B',
          answer2: 'The quantity and nature of interconnected electronic devices integrated into the circuitry.',
          answerNumber3: 'C',
          answer3: 'The distinct geographical location of the photovoltaic system and the prevailing solar irradiance it receives.',
          answerNumber4: 'D',
          answer4: ' The potential fluctuations in voltage stemming from the connected power grid infrastructure.',
        }"
      />
    </div>

    <div class="p-8 rounded-xl shadow-md bg-[var(--bg-primary)]">
      <p class="font-semibold">
        Quiz Navigation
      </p>
      <p class="font-semibold text-2xl">
        Question 1 - 15
      </p>
      <div class="navigation-pane my-6">
        <QuizNavigation
          :details="{ questionNumber: 1 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 2 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 3 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 4 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 5 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 6 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 7 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 8 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 9 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 10 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 11 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 12 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 13 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 14 }"
        />

        <QuizNavigation
          :details="{ questionNumber: 15 }"
        />
      </div>
      <p>Time Left <span class="text-red font-semibold">23:56:45</span></p>
      <RouterLink class="flex justify-end" to="/classes/classId/quizzes/quizId/quiz-score">
        <NButton mode="text" class="">
          Finish Attempt...
        </NButton>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.questions-page{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
}

.navigation-pane{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.8rem;
    align-items: center;
}
</style>
