<template>
  <main class="default-page-container">
    <RouterView />
  </main>
</template>

<style lang="scss">
.default-page-container {
 padding-inline: 1rem;
 overflow-y: auto;

 @include mq(sm) {
    padding-inline: 1.5rem;
 }

 @include mq(md) {
    padding-inline: 2rem;
 }
}
</style>
