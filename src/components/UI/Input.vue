<template>
  <textarea
    :placeholder="props.placeholder"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped>
input {
  margin: 0 10px;
  padding: 10px;
  border: 1px solid darkslategray;
  border-radius: 5px;
}
</style>
