<template>
  <label :for="id">{{ label }}</label>
  <input
    :id="id"
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
  id: {
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
