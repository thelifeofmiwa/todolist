<template>
  <div class="to_do_page">
    <TaskAdd @add-task="addNewTask" />
    <TaskList
      :tasks="tasks"
      @delete-task="deleteTask"
      @update-task-text="updateTaskText"
      @update-task-status="updateTaskStatus"
    />
  </div>
</template>

<script setup>
import TaskAdd from "../components/TaskAdd.vue";
import TaskList from "../components/TaskList.vue";
import { ref, watch } from "vue";

const loadTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const tasks = ref(loadTasks());

watch(
  tasks,
  (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  },
  { deep: true },
);

const addNewTask = (newTask) => {
  tasks.value.push(newTask);
};

const deleteTask = (deletedTask) => {
  tasks.value = tasks.value.filter((task) => task.id !== deletedTask.id);
};

const updateTaskText = (updatedTask) => {
  tasks.value = tasks.value.map((task) =>
    task.id === updatedTask.id ? { ...task, text: updatedTask.text } : task,
  );
};

const updateTaskStatus = (updatedTask) => {
  tasks.value = tasks.value.map((task) =>
    task.id === updatedTask.id ? { ...task, isDone: updatedTask.isDone } : task,
  );
};
</script>

<style scoped>
.to_do_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
