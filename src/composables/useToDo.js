import { ref, watch } from "vue";

export const useToDo = () => {
  const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const tasks = ref(loadTasks());
  const dialogVisible = ref(false);

  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true },
  );

  const showDialog = () => {
    dialogVisible.value = true;
  };

  const addNewTask = (newTask) => {
    tasks.value.push(newTask);
    dialogVisible.value = false;
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
      task.id === updatedTask.id
        ? { ...task, isDone: updatedTask.isDone }
        : task,
    );
  };

  return {
    tasks,
    dialogVisible,
    showDialog,
    addNewTask,
    deleteTask,
    updateTaskText,
    updateTaskStatus,
  };
};
