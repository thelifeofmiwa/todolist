<template>
  <div class="select">
    <Select
      :options="sortOptions"
      v-model="selectedOption"
      @update-sort-option="updateSortOption"
    />
  </div>

  <div v-if="sortedTasks.length">
    <div class="task_list" v-for="(task, index) in sortedTasks" :key="task.id">
      <TaskCard
        :task="task"
        :index="index"
        @delete-task="deleteTask"
        @update-task-text="updateTaskText"
        @update-task-status="updateTaskStatus"
      ></TaskCard>
    </div>
  </div>
  <div v-else class="list_empty">
    <h1>Список пока пуст...</h1>
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
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
}

.list_empty {
  margin-top: 15px;
  color: red;
}

.select {
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  width: 100%;
  max-width: 800px;
}

@media (max-width: 768px) {
  .select {
    width: 90%;
    justify-content: center;
  }

  .task_list {
    flex-direction: column;
    align-items: center;
  }

  .list_empty h1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .list_empty h1 {
    font-size: 1.2rem;
  }
}
</style>
