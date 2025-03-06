<template>
  <input type="checkbox" :checked="props.isChecked" />
</template>

<script setup>
const props = defineProps({
  isChecked: {
    type: Boolean,
  },
});
</script>

<style scoped>
input {
  width: 20px;
  height: 20px;
  border-radius: 5px;
}
</style>
