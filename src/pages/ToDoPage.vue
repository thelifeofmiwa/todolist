<template>
  <div class="to_do_page">
    <div class="to_do_page_head">
      <h1>Список задач</h1>
      <Button
        v-if="!dialogVisible"
        button-text="Добавить задачу"
        @click="showDialog"
      />
    </div>
    <TaskAdd v-if="dialogVisible" @add-task="addNewTask" />
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
import Button from "../components/UI/Button.vue";
import { useToDo } from "../composables/useToDo.js";

const {
  tasks,
  dialogVisible,
  showDialog,
  addNewTask,
  deleteTask,
  updateTaskText,
  updateTaskStatus,
} = useToDo();
</script>

<style scoped>
.to_do_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.to_do_page_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
}
</style>
