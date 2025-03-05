<template>
  <div class="task_list" v-for="(task, index) in props.tasks" :key="task.id">
    <TaskCard :task="task" :index="index"></TaskCard>
  </div>
</template>

<script setup>
import TaskCard from "./TaskCard.vue";

const props = defineProps({
  tasks: Array,
});
</script>

<style>
.task_list {
  display: flex;
}
</style>
