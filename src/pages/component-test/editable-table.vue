<script setup lang="ts">
import Cell from '~/components/editable-table/Cell.vue'
import { cells } from '~/components/editable-table/store.js'

// to name the columns
const cols = ['Student ID', 'Marks']
</script>

<template>
  <div class="flex justify-center mt-10">
    <table class="table-fixed border-collapse">
      <!-- For the table head -->
      <thead>
        <tr>
          <th class="w-8" />
          <th v-for="c in cols" class="w-50">
            {{ c }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="i in cells[0].length">
          <!-- row number -->
          <th class="w-8">
            {{ i }}
          </th>
          <td v-for="(c, j) in cols" class="w-80">
            <Cell :r="i - 1" :c="j" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="row-number-input ml-20 justify-end">
            <h3>Student count : {{ROWS}}
            </h3>
            <div>
                <label for="row-number">Enter the Number of Rows :</label>
                <input type="number" min="1" v-model="rowNumber" class="border-box mr-10" />
                <NButton  @click="addRow" style="height: 2rem !important;"> Add</NButton>
            </div>
        </div> -->
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

/* th {
  background-color: #eee;
} */

td {
  border: 1px solid #ccc;
  height: 2em;
  overflow: hidden;
}
</style>
