import { onMounted, ref, watch } from "vue";

export const useToDo = () => {
  const tasks = ref([]);
  const dialogVisible = ref(false);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      return await response.json();
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
    }
  };
  const loadTasks = async () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasks.value = JSON.parse(savedTasks);
    } else {
      tasks.value = await fetchTasks();
    }
  };

  watch(
    // Watch-ер для перезаписи данных в localStorage при изменении
    tasks,
    (newTasks) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true },
  );

  const showAddTaskForm = () => {
    dialogVisible.value
      ? (dialogVisible.value = false)
      : (dialogVisible.value = true);
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
      task.id === updatedTask.id ? { ...task, title: updatedTask.title } : task,
    );
  };

  const updateTaskStatus = (updatedTask) => {
    tasks.value = tasks.value.map((task) =>
      task.id === updatedTask.id
        ? { ...task, completed: updatedTask.completed }
        : task,
    );
  };

  onMounted(async () => {
    await loadTasks();
  });

  return {
    tasks,
    dialogVisible,
    showAddTaskForm,
    addNewTask,
    deleteTask,
    updateTaskText,
    updateTaskStatus,
  };
};
