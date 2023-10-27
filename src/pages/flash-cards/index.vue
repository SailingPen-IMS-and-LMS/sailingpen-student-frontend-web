<script setup lang="ts">
import PageHeading from '~/components/common/PageHeading.vue'
import FlashCard from '~/components/FlashCard.vue'
</script>

<template>
  <div class="flash-cards-page">
    <PageHeading>Flash Cards</PageHeading>
    <div>
      <h2 class="font-semibold text-lg my-4">
        Pure Mathematics
      </h2>
      <div class="flashcards-grid">
        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-2.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-3.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-4.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />
      </div>
    </div>

    <div>
      <h2 class="font-semibold text-lg my-4">
        Applied Mathematics
      </h2>
      <div class="flashcards-grid">
        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-2.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-3.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-4.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />
      </div>
    </div>

    <div>
      <h2 class="font-semibold text-lg my-4">
        My Decks
      </h2>
      <div class="flashcards-grid">
        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-2.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-3.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-4.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <FlashCard
          :details="{ name: 'Permutation Formulations', image: '/flashcard-1.jpg', description: 'It was popularised in the 1960s with the release of Letraset sheets containing' }"
        />

        <RouterLink to="/flash-cards/new" class="bg-[var(--bg-primary)] mb-6 shadow-md rounded-xl">
          <p class="flex flex-col items-center justify-center font-semibold text-xl h-full">
            <ic-baseline-plus class="text-5xl " />
            Add your Deck
          </p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flashcards-grid{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
}
</style>
