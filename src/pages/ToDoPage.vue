<template>
  <!--  Основная страница приложения  -->
  <div class="to_do_page">
    <div class="to_do_page_head">
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
.to_do_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.to_do_page_head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

.to_do_page_head h1 {
  font-size: 2rem;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .to_do_page_head {
    justify-content: center;
    text-align: center;
  }

  .to_do_page_head h1 {
    font-size: 1.5rem;
  }

  .to_do_page_head button {
    width: 100%;
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  .to_do_page_head h1 {
    font-size: 1.2rem;
  }
}
</style>
