<template>
  <h2>Using JavaScript Expressions</h2>
  <p>
    Your templates can also use Javascript expressions, as long as they are only
    one line. This is especially usefull when used with a ternary. Say you have
    display a different message depending on if the user is logged in or not.
    You could do something like this:
  </p>
  <code v-pre>
    {{ userIsLoggedIn ? `Welcome ${userName}` ? 'Please Login' }}
  </code>
  <p>Try clicking the button below to toggle the message displayed!</p>
  <p>
    <strong>
      {{ userIsLoggedIn ? `Welcome ${userName}` : 'Please Login' }}
    </strong>
  </p>
  <button @click="userIsLoggedIn = !userIsLoggedIn">Toggle Log In State</button>
  <p>
    Your templates can even call JavaScript functions! Say you had a date and
    you wanted all of the dates on your website to be displayed consistently.
    You can pass the date you need to format to a function and Vue will
    automatically transpile it for you. Below we'll pass the current
    <code>Date()</code> to a function to display it consistently across our
    application.
  </p>
  <p>
    The current date is: <strong>{{ formatDate(currentDate) }}</strong>
  </p>
</template>

<script setup>
import { ref } from 'vue';

const userIsLoggedIn = ref(false);
const userName = 'John Doe';
const currentDate = new Date();

function formatDate(date) {
  return date.toLocaleString('en-US', {
    dateStyle: 'full'
  });
}
</script>
