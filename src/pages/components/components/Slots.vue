<template>
  <h2>Using Slots</h2>
  <p>
    Just like with HTML elements, it's often useful to be able to pass content
    to a component. Vue allows you do that with a mechanic it calls
    <code>slots</code>. In your component you can include a
    <code>&lt;slot /&gt;</code> tag and now when you call your component you can
    include whatever content you want between the component's opening and
    closing tags.
  </p>
  <p>
    A slot won't render unless content is passed to it but sometimes you may
    want default content in your slot. To do that just include content between
    the slot's opening and closing tags, like this:
    <code>&lt;slot&gt; Button &lt;/slot&gt;</code> That will render the text
    <strong>Button</strong> in that slot all the time unless you add content
    where your component is called!
  </p>
  <p>
    Lastly, your component may need multiple slots. When that happens you can
    name your slots with a simple <code>name</code> attribute. To pass a named
    slot, we need to use a <code>template</code> element with the
    <code>#</code>, and then pass the name of the slot as an argument to
    <code>#</code>. It'll look something like this.
  </p>
  <code v-pre
    >&lt;template #content&gt;Slot content here.&lt;/template&gt;</code
  >
</template>
