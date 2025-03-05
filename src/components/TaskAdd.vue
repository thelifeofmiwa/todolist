<template>
  <div class="add_task">
    <h3>Добавить новую задачу</h3>
    <Input :placeholder="'Введите текст задачи'" v-model="newTaskText" />
    <Button button-text="Добавить" @click="addNewTask" />
  </div>
</template>

<script setup>
import Button from "./UI/Button.vue";
import Input from "./UI/Input.vue";
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

<style>
.add_task {
  width: 800px;
  margin: 15px;
  padding: 15px;
  border: 1px solid darkslategray;
  border-radius: 10px;
}
</style>
