<template>
  <button
    :type="buttonType"
    :class="color"
    :disabled="disabled"
    @click="$emit('button-clicked')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  buttonType: {
    type: String,
    default: 'button'
  }
});
defineEmits(['button-clicked']);
</script>

<style>
button.primary {
  background-color: #ae0a46;
}
button.primary:hover {
  background-color: #7e0733;
}
button.secondary {
  background-color: #d40e8c;
}
button.secondary:hover {
  background-color: #d40e8c;
}
</style>
