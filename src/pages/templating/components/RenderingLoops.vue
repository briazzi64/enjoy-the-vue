<template>
  <h2>Rendering Loops</h2>
  <p>
    We can use the <code>v-for</code> directive to render a list of items based
    on an array. The <code>v-for</code> directive requires a special syntax in
    the form of <code>item in items</code>, where <code>items</code> is the
    source data array and <code>item</code> is an alias for the array element
    being iterated on.
  </p>
  <p>
    So if we have an array of months like this
    <code>const months = ["January", "February", "March", "April"]</code> we
    would could render the months to a list like this:
  </p>
  <code v-pre
    >&lt;li v-for="month in months" :key="month"&gt;{{ month }}&lt;/li&gt;</code
  >
  <p>And it would render:</p>
  <ul>
    <li v-for="month in months" :key="month">{{ month }}</li>
  </ul>
  <p>If months was an array of object then it would look something like this</p>
  <code v-pre
    >&lt;li v-for="month in monthObjects" :key="month"&gt;{{
      month.name
    }}&lt;/li&gt;</code
  >
  <p>And it would render:</p>
  <ul>
    <li v-for="month in monthObjects" :key="month">{{ month.name }}</li>
  </ul>
  <hr />
  <p>
    <strong>Note:</strong>
    The <code>:key</code> next to the <code>v-for</code>. That is a special Vue
    uses to properly track and change elements when the data updates. You'll
    want to make sure all of your loops have a <code>:key</code> on them.
  </p>
</template>

<script setup>
const months = ['January', 'February', 'March', 'April'];
const monthObjects = [
  {
    name: 'January'
  },
  {
    name: 'February'
  },
  {
    name: 'March'
  },
  {
    name: 'April'
  }
];
</script>
