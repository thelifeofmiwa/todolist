<template>
  <button>
    {{ props.buttonText }}
  </button>
</template>

<script setup>
const props = defineProps({
  buttonText: {
    type: String,
  },
});
</script>

<style scoped>
button {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid darkslategray;
  color: darkslategray;
  background-color: transparent;
  cursor: pointer;
}
</style>
