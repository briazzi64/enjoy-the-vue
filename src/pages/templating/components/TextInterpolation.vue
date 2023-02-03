<template>
  <h2>Text Interpolation</h2>
  <p>
    To render text simply use the double <code v-pre>{{}}</code> with the name
    of the data attribute you want to render. For example
    <code v-pre>{{ msg }}</code> will render the component's
    <code>msg</code> data.
  </p>
  <p>
    Here is our <code>msg</code> data rendered: <strong>{{ msg }}</strong
    >!
  </p>
</template>

<script setup>
const msg = 'Hello World';
</script>
