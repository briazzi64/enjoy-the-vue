<template>
  <h2>Listening to Events</h2>
  <p>
    Our components may need to trigger an event that the parent component needs
    to know about. To do that you'll add <code>defineEmits({})</code> to our
    <code>&lt;script setup&gt;</code> tag in the component.
    <code>defineEmits({})</code> takes an array of strings where each string is
    the name of event we want to emit.
  </p>
  <p>
    Next you'll add an event handler to your template that uses the
    <code>$emit</code> function and takes your emit name as an argument. It'll
    look something like this .
  </p>
  <code>@click="$emit('button-clicked')"</code>
  <p>That would look something like this:</p>
  <img src="emit.png" />
  <p>
    Lastly, you'll need to listen for the event where you included your
    component. Using <code>@</code> and the name of your emit, you'll add that
    to your component's opening tag. It'll look something like
  </p>
  <code>@button-click="doSomething()"</code>
  <p>
    Above, <code>doSomething()</code> is a function inside of the parent
    component.
  </p>
  <p>That would look something like this:</p>
  <img src="listenEmit.png" />
</template>
