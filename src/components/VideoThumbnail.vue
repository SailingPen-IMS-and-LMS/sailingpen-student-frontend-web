<script setup lang="ts">

</script>

<template>
    <div class="video-thumbnail">
        <p class="text-xs">
            Unit - 6
        </p>
        <p>Trigonometric</p>
        <p class="text-base">
            Physics - Ruwan Darshana
        </p>
        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
    </div>
</template>

<style lang="scss" scoped>
.video-thumbnail {
    width: 300px;
    height: 180px;
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/images/video-1.jpg);
    background-repeat: no-repeat;
    border-radius: 8px;
    background-position: center;
    background-size: cover;
    margin-block: 1rem;
    color: white;
    padding: 1rem 2rem;
    position: relative;

    svg {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
