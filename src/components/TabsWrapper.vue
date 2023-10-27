<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['customClass'])

const tabContainer = ref(null)
const tabHeaders = ref(null)
const tabs = ref(null)
const activeTabIndex = ref(0)

onMounted(() => {
  tabs.value = [...tabContainer.value.querySelectorAll('.tab')]
  for (const x of tabs.value) {
	    if (x.classList.contains('active'))
      activeTabIndex.value = tabs.value.indexOf(x)
  }
})
function changeTab(index) {
  activeTabIndex.value = index
  for (const x of [...tabs.value, ...tabHeaders.value])
   		x.classList.remove('active')

  tabs.value[activeTabIndex].classList.add('active')
  tabHeaders.value[activeTabIndex].classList.add('active')
}
</script>

<template>
  <div id="tabs-container" ref="tabContainer" :class="customClass">
    <div id="tab-headers">
      <ul>
        <!-- this shows all of the titles -->
        <li v-for="(tab, index) in tabs" :key="index" ref="tabHeaders" :class="activeTabIndex == index ? 'active' : ''" @click="changeTab(index)">
          {{ tab.title }}
        </li>
      </ul>
    </div>

    <!-- this is where the tabs go, in this slot -->
    <div id="active-tab">
      <slot />
    </div>
  </div>
</template>

<style>
  #tab-headers ul {
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom: 2px solid #ddd;
  }
  #tab-headers ul li {
    list-style: none;
    padding: 1rem 1.25rem;
    position: relative;
    cursor: pointer;
  }
  #tab-headers ul li.active {
    color: var(--n-color-primary-400);
    font-weight: bold;
  }

  #tab-headers ul li.active:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 100%;
    background: var(--n-color-primary-400);
  }
  #active-tab, #tab-headers {
    width: 100%;
  }

  #active-tab {
    padding: 0.75rem;
  }
</style>
