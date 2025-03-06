<template>
  <div class="to_do_page">
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
import TaskAdd from "../components/TaskAdd.vue";
import TaskList from "../components/TaskList.vue";
import { useToDo } from "../composables/useToDo.js";

const { tasks, addNewTask, deleteTask, updateTaskText, updateTaskStatus } =
  useToDo();
</script>

<style scoped>
.to_do_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
