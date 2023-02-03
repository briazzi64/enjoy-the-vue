<template>
  <label :for="inputId">{{ label }}</label>
  <input
    :id="inputId"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  inputId: {
    type: String,
    required: true
  }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
input {
  margin: 0 10px;
}
</style>
