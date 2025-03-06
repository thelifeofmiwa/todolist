<template>
  <!-- Форма добавления новой задачи  -->
  <form @submit.prevent class="add_task">
    <h3 class="header">Добавить новую задачу</h3>
    <div class="body">
      <Input
        class="task_input"
        placeholder="Введите текст задачи"
        v-model="newTaskText"
      />
      <Button class="task_button" button-text="Добавить" @click="addNewTask" />
    </div>
  </form>
</template>

<script setup>
import Button from "./UI/Button.vue";
import Input from "./UI/Textarea.vue";
import { ref } from "vue";

const newTaskText = ref("");

const emit = defineEmits(["add-task"]); // Событие из дочернего компонента для обновления спика задач

const addNewTask = () => {
  const newTask = {
    //создаём новую задачу
    id: Date.now(),
    text: newTaskText.value,
    isDone: false,
  };
  emit("add-task", newTask); // Передаём новую задачу в родительский компонент
  newTaskText.value = ""; // Обнуляем текстовое поле новой задачи
};
</script>

<style scoped>
.add_task {
  width: 100%;
  max-width: 800px;
  margin: 15px;
  padding: 15px;
  border: 1px solid darkslategray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 10px;
}

.task_input {
  width: auto;
  margin-top: 5px;
  padding: 10px;
  font-size: 1rem;
}

.body {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
}

.task_button {
  width: auto;
  padding: 10px 20px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .add_task {
    width: 90%;
    padding: 10px;
  }

  .header {
    font-size: 16px;
  }

  .task_input {
    font-size: 0.9rem;
    padding: 8px;
  }

  .body {
    flex-direction: column;
    align-items: stretch;
  }

  .task_button {
    width: auto;
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  .header {
    font-size: 14px;
  }

  .task_input {
    font-size: 0.8rem;
  }
}
</style>
