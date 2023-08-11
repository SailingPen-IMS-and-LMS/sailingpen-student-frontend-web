<script setup lang="ts">
import { NInput } from '@nethren-ui/vue'
import PageHeading from '~/components/common/PageHeading.vue'

const title = ref('')
const description = ref('')
</script>

<template>
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
</template>
