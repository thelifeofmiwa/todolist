<template>
  <!-- Компонент карточки задачи  -->
  <div class="task_card">
    <div class="task_view" v-if="!isEditingTaskText">
      <div class="task_content">
        <div class="task_text">
          {{ props.index + 1 }}. {{ props.task.text }}
        </div>
        <Checkbox :is-checked="props.task.isDone" @change="updateTaskStatus" />
      </div>
      <div class="task_btns">
        <Button button-text="Редактировать" @click="changeEditingState" />
        <Button button-text="Удалить" @click="deleteTask" />
      </div>
    </div>

    <div class="task_edit" v-else>
      <label class="task_edit_label">
        Редактирование задачи
        <Textarea
          class="task_input"
          placeholder="Впишите текст задачи"
          v-model="taskText"
          style="margin-top: 10px"
        />
      </label>
      <div class="edit_btns">
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
      text: taskText.value,
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
    isDone: taskStatus.value,
  };
  emit("update-task-status", updatedTask);
};

taskText.value = props.task.text; // Передаём в модель текст задачи
taskStatus.value = props.task.isDone; // Передаём в модель статус задачи
</script>

<style scoped>
.task_card {
  width: 100%;
  max-width: 800px;
  margin: 15px;
  padding: 15px;
  border: 1px solid darkslategray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.task_view {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task_content {
  display: flex;
  flex-direction: column;
}

.task_text {
  margin-bottom: 8px;
}

.task_btns {
  display: flex;
  gap: 10px;
}

.task_edit {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.task_edit_label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
}

.task_input {
  width: 100%;
  margin: 0;
}

.edit_btns {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .task_card {
    margin: 10px;
    padding: 10px;
  }

  .task_text {
    font-size: 14px;
  }

  .task_btns {
    flex-direction: column;
    gap: 5px;
  }

  .task_input {
    font-size: 14px;
  }

  .edit_btns {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .task_card {
    margin: 8px;
    padding: 8px;
  }

  .task_text {
    font-size: 12px;
  }

  .task_input {
    font-size: 13px;
  }

  .task_btns {
    gap: 5px;
  }

  .edit_btns {
    justify-content: center;
  }
}

@media (min-width: 1080px) {
  .task_card {
    width: 100%;
    min-width: 800px;
  }
}
</style>
