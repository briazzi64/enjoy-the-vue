<template>
  <h2>Creating and Using Components</h2>
  <p>
    Almost every single project you work on will be built with multiple
    components that come together to make a cohesive experience. Each component
    will have be their own instance so you don't need to worry about interfering
    with other components on the page. To create a component all you need to do
    is end your file with the <code>.vue</code> extension and your build tools
    will handle the rest.
  </p>
  <p>
    To use a component you'll simply include the file in your
    <code>&lt;script setup&gt;</code> tag and then reference it in your
    template. The component will be exposed as the file's default export.
  </p>
  <img src="/componentInclude.png" />
</template>
