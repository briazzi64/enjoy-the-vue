<template>
  <h2>Passing Props</h2>
  <p>
    Components can change depending on where they are used. For example we can
    have a button component and that button may be a different color, say
    something different, or extends with the width of the container depending on
    where it is used. Creating a truly reusable component requires what Vue
    calls <strong>props</strong> so that we can pass data to our component to
    handle all of its possible use case scenarios.
  </p>
  <p>
    To start we need use setup the props in our component. To do that you'll add
    <code>defineProps({})</code> to our <code>&lt;script setup&gt;</code> tag.
    <code>defineProps({})</code> takes an object where each key is the name of
    the prop. Inside each key is another object where we will define the data
    type of the prop we are expecting, a default value, and if the prop is
    required for the component to properly function.
  </p>
</template>
