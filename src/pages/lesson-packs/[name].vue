<script setup lang="ts">
import PageHeading from '~/components/common/PageHeading.vue'
import Attachment from '~/components/attachment.vue'
import VideoQuestion from '~/components/VideoQuestion.vue'
import OtherVideo from '~/components/OtherVideo.vue'

const route = useRoute()
</script>

<template>
  <div class="lesson-pack-page">
    <PageHeading class="">
      {{ route.params.name }}
    </PageHeading>
    <div class="player-grid">
      <div
        class="player"
        :style="{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/video-1.png)`,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0.5rem',
        }"
      />

      <div class="video-info">
        <h2 class="text-xl font-semibold">
          2023 Applied Maths Introduction class Gampaha
        </h2>
        <div class="flex gap-4 my-4">
          <img src="/tutor-1.jpg" class="user-profile" alt="">
          <div class="">
            <p class="font-semibold text-lg">
              Ruwan Darshana
            </p>
            <p>Combined Mathematics</p>
          </div>
        </div>

        <p class="text-l font-semibold">
          The notes relevant to the lesson
        </p>
        <div class="lecture-notes my-4 ">
          <Attachment
            :details="{ attachmentName: 'Differentiation Introduction', image: '/notes-1.jpg', tutorialNumber: 1 }"
          />
          <Attachment
            :details="{ attachmentName: 'Differentiation Introduction', image: '/notes-1.jpg', tutorialNumber: 2 }"
          />
        </div>
        <p class="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>

        <div class="flex gap-4">
          <img src="/student-profile.jpg" class="user-profile mt-4" alt="">
          <div class="flex justify-between items-center w-[100%]">
            <input type="text" placeholder="Ask a question">
            <zondicons-send class="" />
          </div>
        </div>

        <hr style="width:100%; margin-block: 0.5rem;">

        <div>
          <VideoQuestion
            :details="{ userProfile: '/student-profile-2.jpg', studentName: 'Kavini Sulakshana', time: '6 months ago', question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text but also the leap into electronic typesetting, remaining essentially unchanged.' }"
          />

          <VideoQuestion
            :details="{ userProfile: '/student-profile-3.jpg', studentName: 'Malka Samanmalee', time: '7 months ago', question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text' }"
          />

          <VideoQuestion
            :details="{ userProfile: '/student-profile-4.jpg', studentName: 'Shehan Senanayaka', time: '10 months ago', question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text but also the leap into remaining essentially unchanged.' }"
          />
        </div>
      </div>

      <div class="other-videos">
        <h3 class="text-l font-semibold mb-4">
          Watch next lessons
        </h3>
        <div>
          <OtherVideo
            :details="{ image: '/video-2.jpg', videoName: 'Differentiation Graphs - Part 1', time: '2:45:33', date: '2023/05/23' }"
          />
          <OtherVideo
            :details="{ image: '/video-3.jpg', videoName: 'Differentiation Graphs - Part 2', time: '2:45:33', date: '2023/05/23' }"
          />
          <OtherVideo
            :details="{ image: '/video-4.jpg', videoName: 'Calculus - Part 1', time: '2:45:33', date: '2023/05/23' }"
          />
          <OtherVideo
            :details="{ image: '/video-5.jpg', videoName: 'Calculus - Part 2', time: '2:45:33', date: '2023/05/23' }"
          />
          <OtherVideo
            :details="{ image: '/video-6.jpg', videoName: 'Integration', time: '2:45:33', date: '2023/05/23' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .player-grid{
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 1fr;
        gap: 2rem;
        margin-block: 2rem;
        grid-template-areas:
            'video other-video'
            'video-info other-video';

            @include mq(md){

            }
    }

    .player{
        width: 900px;
        aspect-ratio: 16/9;
        grid-area: video;
    }

    .video-info{
        width: 900px;
        grid-area: video-info;
    }

    .other-videos{
        grid-area: other-video;
    }

    .user-profile{
        width: 50px;
        height: 50px;
        aspect-ratio: 1;
        border-radius: 50%;
    }

    .lecture-notes{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    input{
        border: none;
        outline: none;
    }
</style>
