<template>
  <div class="app">
    <TaskAdd @add-task="addNewTask" />
    <TaskList
      :tasks="tasks"
      @delete-task="deleteTask"
      @update-task-text="updateTaskText"
      @update-task-status="updateTaskStatus"
    />
  </div>
</template>

<script setup>
import TaskList from "./components/TaskList.vue";
import TaskAdd from "./components/TaskAdd.vue";
import { ref } from "vue";

const tasks = ref([
  { id: 1, text: "Сходить в тренажёрный зал", isDone: true },
  { id: 2, text: "Купить продукты", isDone: false },
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

const updateTaskStatus = (updatedTask) => {
  tasks.value = tasks.value.map((task) =>
    task.id === updatedTask.id ? { ...task, isDone: updatedTask.isDone } : task,
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
