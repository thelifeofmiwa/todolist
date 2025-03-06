<template>
  <div class="task_card">
    <div class="task_text">{{ props.index + 1 }}. {{ props.task.text }}</div>
    <div class="task_btns">
      <Button button-text="Редактировать" />
      <Button button-text="Удалить" @click="deleteTask" />
    </div>
  </div>
</template>

<script setup>
import Button from "./UI/Button.vue";

const props = defineProps({
  task: Object,
  index: Number,
});

const emit = defineEmits(["delete-task"]);

const deleteTask = () => {
  emit("delete-task", props.task);
};
</script>

<style>
.task_card {
  width: 800px;
  margin: 15px;
  padding: 15px;
  border: 1px solid darkslategray;
  border-radius: 10px;
}
</style>
