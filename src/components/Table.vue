<template>
  <table>
    <thead>
      <tr>
        <th v-for="(heading, index) in headings" :key="`heading${index}`">
          {{ heading }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(column, columnIndex) in row" :key="columnIndex">
          {{ column }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  headings: {
    type: Array,
    required: true,
    default: () => []
  },
  rows: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>
