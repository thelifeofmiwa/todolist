<template>
  <select @change="updateSortOption">
    <option disabled>Какие задачи нужны?</option>
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

<style scoped>
select {
  border: 1px solid darkslategray;
  border-radius: 5px;
  margin: 5px;
  height: 30px;
}
</style>
