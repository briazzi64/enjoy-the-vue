<template>
  <h2>Conditional Rendering</h2>
  <p>
    The ability to conditionally render markup based on our component's data is
    a very powerful feature with Vue's templating engine. Unlike JSX, you will
    put conditions directly on your template elements to decide if they should
    render or not. Below are the major template conditionals you can use
  </p>
  <ul>
    <li><code>v-if</code></li>
    <li><code>v-else</code></li>
    <li><code>v-else-if</code></li>
    <li><code>v-show</code></li>
  </ul>
  <p>
    The first three conditionals are relatively self explanatory. They can be
    used to render large blocks of markup and even different components and they
    work just like an if, else if, else statement in JavaScript.
    <code>v-show</code> works just like <code>v-if</code> but it has 2 major
    differences.
  </p>
  <ol>
    <li>
      <code>v-show</code> using <code>display: none</code> to hide the elements
      you are conditionally rendering while <code>v-if</code> will not render
      the elements to the DOM. This is especially important with components
      because <code>v-show</code> will still run through all of your component's
      initial setup and could cause performance issues for your initial render.
    </li>
    <li>
      <code>v-show</code> can not be used with <code>v-else-if</code> or
      <code>v-if</code>
    </li>
  </ol>
  <p>
    Try the example out below by choosing a season from the radio group and
    noticing the emoji change in the content above.
  </p>
  <input id="spring" v-model="activeSeason" type="radio" value="spring" />
  <label for="spring"> Spring </label>
  <input id="summer" v-model="activeSeason" type="radio" value="summer" />
  <label for="summer"> Summer </label>
  <input id="fall" v-model="activeSeason" type="radio" value="fall" />
  <label for="fall"> Fall </label>
  <input id="winter" v-model="activeSeason" type="radio" value="winter" />
  <label for="winter"> Winter </label>
  <p v-if="activeSeason === 'spring'">Rainy Days &#127783;</p>
  <p v-else-if="activeSeason === 'summer'">Pool Party &#127946;</p>
  <p v-else-if="activeSeason === 'fall'">Halloween &#127875;</p>
  <p v-else>BRRRRR &#9924;</p>
</template>

<script setup>
import { ref } from 'vue';

const activeSeason = ref('winter');
</script>
