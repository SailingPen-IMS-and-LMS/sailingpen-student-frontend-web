<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import Quiz from '~/components/Quiz.vue'
import Accordion from '~/components/Accordion.vue'
import UpcomingHistoryQuiz from '~/components/UpcomingHistoryQuiz.vue'

const route = useRoute()
console.log(route.params)
</script>

<template>
  <div class="quizzes-page mt-8">
    <div class="quiz px-4">
      <div class="available-now">
        <h1 class="text-lg font-semibold">
          Available Now
        </h1>
        <RouterLink to="/classes/class12523_345/quizzes/quizId/questions">
          <Quiz
            :details="{ quizNumber: 1, name: 'Permutations and Combinations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy teindustrys standard dummy te' }"
          />
        </RouterLink>

        <RouterLink to="/classes/class12523_345/quizzes/quizId/questions">
          <Quiz
            :details="{ quizNumber: 1, name: 'Permutations and Combinations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy teindustrys standard dummy te' }"
          />
        </RouterLink>
      </div>

      <div class="upcoming-history flex flex-col">
        <div class="self-end">
          <RouterLink
            :to="`/classes/${route.params.classId}/quizz-leaderboard`"
          >
            <NButton>
              Quiz Leaderboard
            </NButton>
          </RouterLink>
        </div>

        <div class="mt-3">
          <Accordion
            :details="{ title: 'Upcoming Quizzes' }"
          >
            <UpcomingHistoryQuiz :details="{ heading: 'Permutation and Combination', date: '2023/11/02', description: '40 MCQ' }" />
          </Accordion>

          <Accordion
            :details="{ title: 'History' }"
          />
        </div>

        <!-- <div>
          <h1 class="text-lg font-semibold">
            Upcoming
          </h1>
          <Quiz
            :details="{ quizNumber: 1, name: 'Permutations and Combinations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy teindustrys standard dummy te' }"
          />

          <Quiz
            :details="{ quizNumber: 1, name: 'Permutations and Combinations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy teindustrys standard dummy te' }"
          />
        </div> -->

        <!-- <div>
          <h1 class="text-lg font-semibold">
            History
          </h1>
          <Quiz
            :details="{ quizNumber: 1, name: 'Permutations and Combinations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy teindustrys standard dummy te' }"
          />

          <Quiz
            :details="{ quizNumber: 1, name: 'Permutations and Combinations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy teindustrys standard dummy te' }"
          />

          <Quiz
            :details="{ quizNumber: 1, name: 'Permutations and Combinations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy teindustrys standard dummy te' }"
          />
        </div> -->
      </div>
    </div>
  </div>

  <!-- <div class="places bg-[var(--bg-primary)] shadow-md flex gap-[2.5rem] justify-center p-8 my-[1rem] rounded-xl">
            <div class="flex flex-col items-center gap-2 items-end justify-end">
                <img src="/student-profile.jpg" alt="" class="w-[50px] h-[50px]"
                    style="aspect-ratio: 1; border-radius: 50%;">
                <p class="font-semibold">
                    Semini
                </p>
                <div class="w-[4rem] h-[6rem] bg-[#B799FF] pt-[0.875rem]" style="border-radius:10px 10px 0 0">
                    <p class="text-center font-semibold">
                        2nd
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-center gap-2 items-end justify-end">
                <img src="/student-profile-2.jpg" alt="" class="w-[50px] h-[50px]"
                    style="aspect-ratio: 1; border-radius: 50%;">
                <p class="font-semibold">
                    Gayani
                </p>
                <div class="w-[4rem] h-[10rem] bg-[#FFB6B6] pt-[0.875rem]" style="border-radius:10px 10px 0 0">
                    <p class="text-center font-semibold">
                        1 st
                    </p>
                </div>
            </div>

            <div class="flex flex-col items-center gap-2 items-end justify-end">
                <img src="/student-profile-3.jpg" alt="" class="w-[50px] h-[50px]"
                    style="aspect-ratio: 1; border-radius: 50%;">
                <p class="font-semibold">
                    Darashani
                </p>
                <div class="w-[4rem] h-[4rem] bg-[#48E122] pt-[0.875rem]" style="border-radius:10px 10px 0 0">
                    <p class="text-center font-semibold">
                        3rd
                    </p>
                </div>
            </div>
        </div> -->

  <!-- <div
    class="summary text-center bg-[var(--bg-primary)] shadow-md px-8 my-[1rem] flex flex-col justify-center items-center rounded-xl"
  >
    <p class="font-semibold text-xl my-4">
      Your Accumulative Rank
    </p>
    <p class="font-bold text-5xl text-[var(--n-color-primary-400)] my-3">
      56
    </p>
    <p>Your Average score : 87</p>
    <p>Number of student who attempted the Quiz : 2456</p>
  </div>

  <div class="leaderboard">
    <p class="font-semibold">
      Leader Board
    </p>
    <div class="flex gap-[6rem] font-semibold text-gray-500 my-4">
      <p class="w-[3rem]">
        Place
      </p>
      <p class="w-[15rem]">
        Index Number
      </p>
      <p class="w-[20rem]">
        Name
      </p>
      <p>
        Marks
      </p>
    </div>
    <hr class="">

    <div>
      <QuizLeaderBoard
        :details="{ place: 1, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 2, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 3, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 1, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 2, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 3, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 1, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 2, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />

      <QuizLeaderBoard
        :details="{ place: 3, indexNumber: '2000034', profilePicture: '/student-profile.jpg', name: 'Shanaka Weerasingha', marks: '99%' }"
      />
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.quiz {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    height: calc(100vh - 60px);
    overflow: hidden;
    grid-template-rows: 300px 1fr;
}

.quiz {
    grid-area: quiz;
    overflow-y: auto;
}

// .available_now{
//     grid-area: available-now;
// }

// .upcoming-history{
//     grid-area: upcoming-history;
// }

// .places {
//     grid-area: places;

//     // height: 300px;
// }

// .summary {
//     grid-area: summary;
//     // height: 300px;
// }

.leaderboard {
    grid-area: leaderboard;
    overflow-y: auto;
}
</style>
