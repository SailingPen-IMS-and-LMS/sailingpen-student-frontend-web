<script setup>
  import { createApp } from 'vue'
	import Tabs from '../../components/Tabs.vue'
	import Tab from '../../components/Tab.vue'
</script>

<template>

    <h1>This is class page</h1>
	<Tabs>
  	<Tab active="true" title="First Tab">
      1st tab
    </Tab>
  	<Tab title="Second Tab">
      2nd tab
    </Tab>
  	<Tab title="Third Tab">
      3rd tab
    </Tab>
  	<Tab title="Fourth Tab">
      4th tab
    </Tab>
  </Tabs>
</template>
