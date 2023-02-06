<template>
  <h1>Todo Component</h1>
  <form @submit.prevent="addTodo">
    <InputComponent id="newTodo" v-model="newTodo" label="New Todo" />
    <ButtonComponent :disabled="!newTodo.length" type="submit">
      Submit
    </ButtonComponent>
    <ButtonComponent
      v-if="newTodo.length"
      style="margin-left: 10px"
      color="secondary"
      @button-clicked="resetNewTodo()"
    >
      Reset
    </ButtonComponent>
  </form>
  <TableComponent :headings="['Todo', 'Completed']" :rows="todos" />
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import fetchTodos from '../../api/todos';
import InputComponent from '../../components/Input.vue';
import ButtonComponent from '../../components/Button.vue';
import TableComponent from '../../components/Table.vue';

const apiResponse = ref([]);
const todos = ref([]);
watchEffect(async () => {
  apiResponse.value = await fetchTodos();
  todos.value = apiResponse.value
    .map((todo) => [todo.title, todo.completed])
    .slice(0, 10);
});

const newTodo = ref('');
function resetNewTodo() {
  newTodo.value = '';
}
function addTodo() {
  todos.value = [[newTodo.value, false], ...todos.value];
  newTodo.value = '';
}
</script>

<style scoped>
table {
  margin-top: 15px;
}
</style>
