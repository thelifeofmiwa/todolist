<template>
  <!-- Компонент карточки задачи  -->
  <div class="task-card">
    <div class="task-view" v-if="!isEditingTaskText">
      <div class="task-content">
        <div class="task-text">
          {{ props.index + 1 }}. {{ props.task.title }}
        </div>
        <Checkbox
          :is-checked="props.task.completed"
          @change="updateTaskStatus"
        />
      </div>
      <div class="task-btns">
        <Button button-text="Редактировать" @click="changeEditingState" />
        <Button button-text="Удалить" @click="deleteTask" />
      </div>
    </div>

    <div class="task-edit" v-else>
      <label class="task-edit-label">
        Редактирование задачи
        <Textarea
          class="task-input"
          placeholder="Впишите текст задачи"
          v-model="taskText"
          style="margin-top: 10px"
        />
      </label>
      <div class="edit-btns">
        <Button button-text="Сохранить" @click="updateTaskText" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./UI/Button.vue";
import Textarea from "./UI/Textarea.vue";
import Checkbox from "./UI/Checkbox.vue";
import { ref } from "vue";

const props = defineProps({
  task: Object,
  index: Number,
});

const taskText = ref("");
const taskStatus = ref(false);
const isEditingTaskText = ref(false);

const changeEditingState = () => {
  isEditingTaskText.value = true;
};

const emit = defineEmits([
  "delete-task",
  "update-task-text",
  "update-task-status",
]);

const deleteTask = () => {
  emit("delete-task", props.task);
};

const updateTaskText = () => {
  if (taskText.value) {
    const updatedTask = {
      ...props.task,
      label: taskText.value,
    };
    emit("update-task-text", updatedTask);
    isEditingTaskText.value = false;
  } else {
    alert("Задача не может быть пустой!");
  }
};

const updateTaskStatus = () => {
  taskStatus.value = !taskStatus.value;
  const updatedTask = {
    ...props.task,
    completed: taskStatus.value,
  };
  emit("update-task-status", updatedTask);
};

taskText.value = props.task.title; // Передаём в модель текст задачи
taskStatus.value = props.task.completed; // Передаём в модель статус задачи
</script>

<style scoped>
.task-card {
  width: 100%;
  max-width: 800px;
  margin: 15px;
  padding: 15px;
  border: 1px solid darkslategray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.task-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-content {
  display: flex;
  flex-direction: column;
}

.task-text {
  margin-bottom: 8px;
}

.task-btns {
  display: flex;
  gap: 10px;
}

.task-edit {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.task-edit-label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
}

.task-input {
  width: 100%;
  margin: 0;
}

.edit-btns {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .task-card {
    margin: 10px;
    padding: 10px;
  }

  .task-text {
    font-size: 14px;
  }

  .task-btns {
    flex-direction: column;
    gap: 5px;
  }

  .task-input {
    font-size: 14px;
  }

  .edit-btns {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .task-card {
    margin: 8px;
    padding: 8px;
  }

  .task-text {
    font-size: 12px;
  }

  .task-input {
    font-size: 13px;
  }

  .task-btns {
    gap: 5px;
  }

  .edit-btns {
    justify-content: center;
  }
}

@media (min-width: 1080px) {
  .task-card {
    width: 100%;
    min-width: 800px;
  }
}
</style>
