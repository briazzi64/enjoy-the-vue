<template>
  <h2>Attribute Binding</h2>
  <p>
    Since we can't use <code v-pre>{{}}</code> on HTML attributes we will
    instead use <code v-pre>v-bind</code>. <code v-pre>v-bind</code> is almost
    always used with the shorthand <code v-pre>:</code> and so we'll focus on
    demoing that.
  </p>
  <p>
    Say we want to add a class dynamically based on if a button has been
    clicked. We can simply add <code v-pre>:class="customClass"</code> where
    <code>customClass</code> is a data attribute. Notice the blue button below.
    We added the <code>customClass</code> data to the button's class attribute
    to override the default colors!
  </p>
  <button :class="customClass">I'm Blue</button>
</template>

<script setup>
const customClass = 'blue';
</script>

<style scoped>
button.blue {
  background-color: blue;
}
</style>
