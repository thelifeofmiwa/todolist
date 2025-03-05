<template>
  <div class="task_card">
    <div class="task_text">{{ props.index + 1 }}. {{ props.task.text }}</div>
    <div class="task_btns">
      <button>Редактировать</button>
      <button>Удалить</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  task: Object,
  index: Number,
});
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
