<script setup lang="ts">
import { NButton, NInput } from '@nethren-ui/vue'
import PageHeading from '~/components/common/PageHeading.vue'
import MyFlashCard from '~/components/MyFlashCard.vue'

const title = ref('')
const description = ref('')
</script>

<template>
    <div class="add-deck-page">
        <PageHeading>Add your Deck</PageHeading>
        <form action="">
            <div class="flex justify-between">
                <NInput id="title" v-model="title" type="text" label="Title" name="title" />
                <div>
                    <label for="" class="mb-4 block">Add a Cover Image</label>
                    <input type="file">
                </div>
            </div>
            <NInput id="description" v-model="description" type="text" label="Description" name="description" />
        </form>

        <h2 class="font-semibold text-xl my-6">
            Add Cards
        </h2>
        <div class="my-flashcard-grid">
            <MyFlashCard :details="{ question: 'd/dx x cos 2x' }" background-color="#070A52" />

            <MyFlashCard :details="{ question: 'd/dx 2x cot 2x' }" background-color="#F94C10" />

            <MyFlashCard :details="{ question: 'd/dx x tan 2x' }" background-color="#FF1E56" />

            <MyFlashCard :details="{ question: 'd/dx sin x/2' }" background-color="#FFD700" />

            <MyFlashCard :details="{ question: 'd/dx x cosec 3x/5' }" background-color="#C327AB" />

            <MyFlashCard :details="{ question: 'd/dx x/5 cos 2x' }" background-color="#0D63A5" />

            <MyFlashCard :details="{ question: 'd/dx 5x/3 sec 4x/(2x-4)' }" background-color="#16FF00" />

            <RouterLink to="/flash-cards/new" class="bg-[var(--bg-primary)] mb-6 shadow-md rounded-xl">
                <p class="flex flex-col items-center justify-center font-semibold text-xl h-[10rem]">
                    <ic-baseline-plus class="text-5xl " />
                    Add a Card
                </p>
            </RouterLink>
        </div>
        <div class="flex items-center justify-end mb-8">
            <RouterLink  to="/flash-cards">
                <NButton>Done</NButton>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.my-flashcard-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
}
</style>
