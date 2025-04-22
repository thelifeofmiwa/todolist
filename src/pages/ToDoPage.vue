<template>
  <!--  Основная страница приложения  -->
  <div class="todo-page">
    <div class="todo-page-head">
      <h1>Список задач</h1>
      <Button
        :button-text="dialogVisible ? 'Отменить' : 'Добавить'"
        @click="showAddTaskForm"
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
  showAddTaskForm,
  addNewTask,
  deleteTask,
  updateTaskText,
  updateTaskStatus,
} = useToDo(); // деструктуризируем данные и методы из composable-функции useToDo
</script>

<style scoped>
.todo-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.todo-page-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

.todo-page-head h1 {
  font-size: 2rem;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .todo-page-head {
    justify-content: center;
    text-align: center;
  }

  .todo-page-head h1 {
    font-size: 1.5rem;
  }

  .todo-page-head button {
    width: 100%;
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  .todo-page-head h1 {
    font-size: 1.2rem;
  }
}
</style>
