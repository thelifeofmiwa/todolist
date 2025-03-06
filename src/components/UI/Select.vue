<template>
  <select @change="updateSortOption">
    <option disabled>Отфильтровать задачи...</option>
    <option
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  options: Array,
});

const emit = defineEmits(["update-sort-option"]);

const updateSortOption = (event) => {
  emit("update-sort-option", event.target.value);
};
</script>

<style scoped></style>
