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

<style scoped></style>
