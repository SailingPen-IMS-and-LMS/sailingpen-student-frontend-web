<script setup>
    // import { createApp } from 'vue'
	import Tabs from '../../components/TabsWrapper.vue'
	import Tab from '../../components/Tab.vue'
</script>

<template>

    <h1 class="text-2xl pl-5">Combined Maths - Ruwan Darshana</h1>
	<Tabs>
        <Tab active="true" title="Home">
        1st tab
        </Tab>
        <Tab title="Announcements">
        2nd tab
        </Tab>
        <Tab title="Quizzes">
        3rd tab
        </Tab>
    </Tabs>
</template>

<style lang="scss">

</style>
