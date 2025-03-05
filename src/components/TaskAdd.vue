<template>
  <form @submit.prevent class="add_task">
    <h3 class="header">Добавить новую задачу</h3>
    <div class="body">
      <Input :placeholder="'Введите текст задачи'" v-model="newTaskText" />
      <Button button-text="Добавить" @click="addNewTask" />
    </div>
  </form>
</template>

<script setup>
import Button from "./UI/Button.vue";
import Input from "./UI/Input.vue";
import { ref } from "vue";

const newTaskText = ref("");

const emit = defineEmits(["add-task"]);

const addNewTask = (e) => {
  const newTask = {
    id: Date.now(),
    text: newTaskText.value,
    isDone: false,
  };
  emit("add-task", newTask);
  newTaskText.value = "";
};
</script>

<style>
.add_task {
  width: 800px;
  margin: 15px;
  padding: 15px;
  border: 1px solid darkslategray;
  border-radius: 10px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
.body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
