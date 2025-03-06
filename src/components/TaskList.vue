<template>
  <div class="task_list" v-for="(task, index) in props.tasks" :key="task.id">
    <TaskCard :task="task" :index="index" @delete-task="deleteTask"></TaskCard>
  </div>
</template>

<script setup>
import TaskCard from "./TaskCard.vue";

const props = defineProps({
  tasks: Array,
});

const emit = defineEmits(["delete-task"]);

const deleteTask = (deletedTask) => {
  emit("delete-task", deletedTask);
  console.log("deletedTask", deletedTask);
};
</script>

<style>
.task_list {
  display: flex;
}
</style>
