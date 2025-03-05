<template>
  <input type="text" :placeholder="props.placeholder" />
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
input {
  margin: 0 10px;
  padding: 10px;
  border: 1px solid darkslategray;
  border-radius: 5px;
}
</style>
