<script setup lang="ts">
import IconAccessibility from '~icons/carbon/accessibility'

const { t } = useI18n()
</script>

<template>
  <h1 class="text-6xl">
    {{ t('auth.login') }}
  </h1>
  <IconAccessibility />
</template>
