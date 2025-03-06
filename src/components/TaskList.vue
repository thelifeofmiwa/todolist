<template>
  <h1>Список задач</h1>
  <Select
    :options="sortOptions"
    v-model="selectedOption"
    @update-sort-option="updateSortOption"
  />
  <div class="task_list" v-for="(task, index) in sortedTasks" :key="task.id">
    <TaskCard
      :task="task"
      :index="index"
      @delete-task="deleteTask"
      @update-task-text="updateTaskText"
      @update-task-status="updateTaskStatus"
    ></TaskCard>
  </div>
</template>

<script setup>
import TaskCard from "./TaskCard.vue";
import Select from "./UI/Select.vue";
import { computed, ref } from "vue";

const sortOptions = [
  { value: "all", name: "Все задачи" },
  { value: "done", name: "Сделанные" },
  { value: "undone", name: "Несделанные" },
];
const selectedOption = ref("all");

const updateSortOption = (option) => {
  selectedOption.value = option;
};

const sortedTasks = computed(() => {
  if (selectedOption.value === "done") {
    return props.tasks.filter((task) => task.isDone);
  } else if (selectedOption.value === "undone") {
    return props.tasks.filter((task) => !task.isDone);
  }
  return props.tasks; // Если "all" — возвращаем все задачи
});

const props = defineProps({
  tasks: Array,
});

const emit = defineEmits([
  "delete-task",
  "update-task-text",
  "update-task-status",
]);

const deleteTask = (deletedTask) => {
  emit("delete-task", deletedTask);
};

const updateTaskText = (updatedTask) => {
  emit("update-task-text", updatedTask);
};

const updateTaskStatus = (updatedTask) => {
  emit("update-task-status", updatedTask);
};
</script>

<style>
.task_list {
  display: flex;
}
</style>
