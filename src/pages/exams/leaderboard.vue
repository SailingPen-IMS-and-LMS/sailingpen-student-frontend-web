<script setup lang="ts">
import PageHeading from '~/components/common/PageHeading.vue'
import ExamRank from '~/components/ExamRank.vue'
import LeaderBoard from '~/components/LeaderBoard.vue'
</script>

<template>
  <div class="exam-leaderboard-page">
    <PageHeading>Exam - Leader Board</PageHeading>
    <h2 class="font-semibold text-lg my-3">
      Combined Mathematics - Ruwan Darshana
    </h2>
    <h3 class="font-semibold">
      Permutation and Combination - Paper No - 23
    </h3>

    <div class="flex gap-10 justify-center">
      <ExamRank
        :details="{ image: '/student-profile-2.jpg', name: 'Kavini Kalhari', place: 3, school: 'Visaka College Colombo' }" color="#B32626"
      />
      <ExamRank
        :details="{ image: '/student-profile-3.jpg', name: 'Malki Nimasha', place: 1, school: 'Devibalika College Colombo' }" color="#DD6B20"
      />
      <ExamRank
        :details="{ image: '/student-profile-4.jpg', name: 'Shehan Gunarathna', place: 2, school: 'Royal college Colombo' }" color="#878C82"
      />
    </div>

    <div class="my-8 px-[8rem]">
      <!-- <div class="font-semibold text-gray-500 flex gap-[6rem] text-center">
        <p class="w-[3rem]">
          Rank
        </p>
        <p class="w-[10rem]">
          Index Number
        </p>
        <p class="w-[20rem]">
          Name
        </p>
        <p class="w-[25rem]">
          School
        </p>
        <p class="">
          Marks
        </p>
      </div> -->
      <hr class="mt-4">

      <div>
        <table>
          <tr class=" text-gray-500 text-center">
            <th>Rank</th>
            <th>Index Number</th>
            <th class="text-center">
              Name
            </th>
            <th class="text-center">
              School
            </th>
            <th>Marks</th>
          </tr>

          <LeaderBoard
            :details="{ place: 1, indexNumber: '20000232', profilePicture: '/student-profile-3.jpg', name: 'Malki Nimasha', school: 'Devibalika College Colombo', marks: '100%' }"
          />

          <LeaderBoard
            :details="{ place: 2, indexNumber: '20002232', profilePicture: '/student-profile-2.jpg', name: 'Shehan Gunarathna', school: 'Royal College Colombo', marks: '99%' }"
          />

          <LeaderBoard
            :details="{ place: 3, indexNumber: '20050232', profilePicture: '/student-profile-4.jpg', name: 'Kavini Kalhari', school: 'Visaka College Colombo', marks: '97%' }"
          />

          <LeaderBoard
            :details="{ place: 4, indexNumber: '20060023', profilePicture: '/student-profile.jpg', name: 'Madushika Senanayaka', school: 'Devibalika College Colombo', marks: '96%' }"
          />

          <LeaderBoard
            :details="{ place: 5, indexNumber: '25000232', profilePicture: '/student-profile-3.jpg', name: 'Hasini Vijerathna', school: 'Devibalika College Colombo', marks: '93%' }"
          />

          <LeaderBoard
            :details="{ place: 6, indexNumber: '29000232', profilePicture: '/student-profile-3.jpg', name: 'Malki Nimasha', school: 'Devibalika College Colombo', marks: '90%' }"
          />

          <LeaderBoard
            :details="{ place: 7, indexNumber: '20080232', profilePicture: '/student-profile-3.jpg', name: 'Malki Nimasha', school: 'Devibalika College Colombo', marks: '89%' }"
          />
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
table{
    width: 100%;
    border-collapse: collapse;
}

td, th{
    text-align: left;
    padding: 8px;
}

// tr:nth-child(even){
//     background-color: var(--bg-primary);
// }
</style>
