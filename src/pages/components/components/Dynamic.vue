<template>
  <h2>Dynamic Components</h2>
  <p>
    Sometimes, it's useful to dynamically switch between components, like in a
    tabbed interface. To do that we'll need to use the
    <code>&lt;component&gt;</code> element with the <code>:is</code> attribute.
  </p>
  <p>In the example above, the value passed to :is can contain either:</p>
  <ul>
    <li>the name string of a registered component</li>
    <li>the actual imported component object</li>
  </ul>
  <p>
    When switching between multiple components with
    <code>&lt;component :is="..."&gt;</code>, a component will be unmounted when
    it is switched away from. This will trigger the Vue lifecycle.
  </p>
</template>
