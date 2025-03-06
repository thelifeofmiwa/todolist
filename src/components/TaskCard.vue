<template>
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
      <div>Редактирование задачи</div>
      <Textarea placeholder="Впишите текст задачи" v-model="taskText" />
      <Button button-text="Сохранить" @click="updateTaskText" />
    </div>
  </div>
</template>

<script setup>
import Button from "./UI/Button.vue";
import Textarea from "./UI/Textarea.vue";
import { ref } from "vue";
import Checkbox from "./UI/Checkbox.vue";

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
  const updatedTask = {
    ...props.task,
    text: taskText.value,
  };
  emit("update-task-text", updatedTask);
  isEditingTaskText.value = false;
};

const updateTaskStatus = () => {
  taskStatus.value = !taskStatus.value;
  const updatedTask = {
    ...props.task,
    isDone: taskStatus.value,
  };
  emit("update-task-status", updatedTask);
};

taskText.value = props.task.text;
taskStatus.value = props.task.isDone;
</script>

<style scoped>
.task_card {
  width: 800px;
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
</style>
