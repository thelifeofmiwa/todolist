<template>
  <!-- Компонент списка задач  -->
  <div class="select">
    <Select
      :options="sortOptions"
      v-model="selectedOption"
      @update-sort-option="updateSortOption"
    />
  </div>

  <div class="wrapper" v-if="sortedTasks.length">
    <div class="task-list" v-for="(task, index) in sortedTasks" :key="task.id">
      <TaskCard
        :task="task"
        :index="index"
        @delete-task="deleteTask"
        @update-task-text="updateTaskText"
        @update-task-status="updateTaskStatus"
      ></TaskCard>
    </div>
  </div>
  <div v-else class="list-empty">
    <h1>Список пока пуст...</h1>
  </div>
</template>

<script setup>
import TaskCard from "./TaskCard.vue";
import Select from "./UI/Select.vue";
import { computed, ref } from "vue";

const props = defineProps({
  tasks: Array,
});

const sortOptions = [
  // Опции для фильтрации задач
  { value: "all", name: "Все задачи" },
  { value: "done", name: "Сделанные" },
  { value: "undone", name: "Несделанные" },
];
const selectedOption = ref("all"); // Изначально отображаем все задачи

const updateSortOption = (option) => {
  selectedOption.value = option;
};

const sortedTasks = computed(() => {
  //Отсортированные задачи
  if (selectedOption.value === "done") {
    return props.tasks.filter((task) => task.completed);
  } else if (selectedOption.value === "undone") {
    return props.tasks.filter((task) => !task.completed);
  }
  return props.tasks;
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
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.task-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;
}

.list-empty {
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

  .task-list {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .list-empty h1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .list-empty h1 {
    font-size: 1.2rem;
  }
}
</style>
