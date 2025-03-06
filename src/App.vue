<template>
  <div class="app">
    <h1>Список задач</h1>
    <TaskAdd @add-task="addNewTask" />
    <TaskList
      :tasks="tasks"
      @delete-task="deleteTask"
      @update-task-text="updateTaskText"
    />
  </div>
</template>

<script setup>
import TaskList from "./components/TaskList.vue";
import TaskAdd from "./components/TaskAdd.vue";
import { ref } from "vue";

const tasks = ref([
  { id: 1, text: "Сходить в тренажёрный зал", isDone: false },
  { id: 2, text: "Купить продукты", isDone: true },
]);

const addNewTask = (newTask) => {
  tasks.value.push(newTask);
};

const deleteTask = (deletedTask) => {
  tasks.value = tasks.value.filter((task) => task.id !== deletedTask.id);
};

const updateTaskText = (updatedTask) => {
  tasks.value = tasks.value.map((task) =>
    task.id === updatedTask.id ? { ...task, text: updatedTask.text } : task,
  );
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
