<template>
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

const emit = defineEmits(["add-task"]);

const addNewTask = () => {
  const newTask = {
    id: Date.now(),
    text: newTaskText.value,
    isDone: false,
  };
  emit("add-task", newTask);
  newTaskText.value = "";
};
</script>

<style scoped>
.add_task {
  width: 800px;
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
  width: 100%;
  margin-top: 5px; /* Чтобы текстовое поле не сливалось с заголовком */
}

.body {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
