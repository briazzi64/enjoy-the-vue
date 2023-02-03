<template>
  <h2>V-model</h2>
  <p>
    When dealing with forms on the frontend, we often need to sync the state of
    form input elements with corresponding state in JavaScript. It can be
    cumbersome to manually wire up value bindings and change event listeners and
    inputs handle value differently than checkboxes and radio groups too. Vue
    has a handy directive known as <code>v-model</code> to help with all of your
    data binding on a form. Below are examples for all of the major form input
    elements you will use.
  </p>
  <h3>Text</h3>
  <p>
    <code v-pre>&lt;input v-model="text" /&gt;</code>
  </p>
  <p>Input is: {{ text }}</p>
  <input v-model="text" placeholder="Edit me" />
  <h3>Textarea</h3>
  <p>
    <code v-pre>&lt;textara v-model="textarea"&gt;&lt;/textarea&gt;</code>
  </p>
  <p>Textarea is: {{ textArea }}</p>
  <textarea v-model="textArea" placeholder="Edit me"></textarea>
  <h3>Radio</h3>
  <p>
    <code v-pre>&lt;input type="radio" v-model="radio" /&gt;</code>
  </p>
  <p>Picked: {{ radio }}</p>
  <input id="one" v-model="radio" type="radio" value="One" />
  <label for="one">One</label>
  <input id="two" v-model="radio" type="radio" value="Two" />
  <label for="two">Two</label>
  <h3>Checkbox</h3>
  <p>
    <code v-pre>&lt;input type="checkbox" v-model="checkbox" /&gt;</code>
  </p>
  <p>Checkbox is checked: {{ checkbox }}</p>
  <label for="checkbox">Check Me</label>
  <input id="checkbox" v-model="checkbox" type="checkbox" />
  <h3>Select</h3>
  <p>
    <code v-pre>&lt;select v-model="select"&gt;</code>
  </p>
  <p>Picked: {{ singleSelect }}</p>
  <select v-model="singleSelect">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <h3>Multi Checkboxes and Select</h3>
  <p>
    You can also bind multiple checkboxes or a multi select input to the same
    piece of data. The data will need to be an array and the array with contain
    only the checked values.
  </p>
  <p>Checked Names: {{ multiCheckbox }}</p>
  <input id="john" v-model="multiCheckbox" type="checkbox" value="John" />
  <label for="john">John</label>
  <input id="jane" v-model="multiCheckbox" type="checkbox" value="Jane" />
  <label for="jane">Jane</label>
  <p>Selected: {{ multiSelect }}</p>
  <select v-model="multiSelect" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');
const textArea = ref('');
const checkbox = ref(false);
const radio = ref('');
const singleSelect = ref('');
const multiCheckbox = ref([]);
const multiSelect = ref([]);
</script>
