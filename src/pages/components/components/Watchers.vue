<template>
  <h2>Watchers</h2>
  <p>
    Computed properties allow us to declaratively compute derived values.
    However, there are cases where we need to perform "side effects" in reaction
    to state changes - for example, mutating the DOM, or changing another piece
    of state based on the result of an async operation. There are two types of
    watcher functions and they are <code>watch</code> and
    <code>watchEffect</code>.
  </p>
  <h3>watch</h3>
  <p>
    <code>watch()</code> is a function you include from <code>vue</code>. The
    first argument is a property or an array of properties that you want to
    watch for changes. The second argument is a callback that you will fire when
    the value(s) update. The callback receives three arguments and they are:
  </p>
  <ul>
    <li>new value</li>
    <li>old value</li>
    <li>a function for registering side effect cleanup</li>
  </ul>
  <h3>watchEffect</h3>
  <p>
    <code>watchEffect</code> is also a function you include from
    <code>vue</code>. The difference is that <code>watchEffect</code> allows us
    to track the callback's reactive dependencies automatically.
  </p>
  <h3>watch vs watchEffect</h3>
  <p>
    <code>watch</code> and <code>watchEffect</code> both allow us to reactively
    perform side effects. Their main difference is the way they track their
    reactive dependencies:
  </p>
  <ul>
    <li>
      <code>watch</code> only tracks the explicitly watched source. It won't
      track anything accessed inside the callback. In addition, the callback
      only triggers when the source has actually changed.
      <code>watch</code> separates dependency tracking from the side effect,
      giving us more precise control over when the callback should fire.
    </li>
    <li>
      <code>watchEffect</code>, on the other hand, combines dependency tracking
      and side effect into one phase. It automatically tracks every reactive
      property accessed during its synchronous execution. This is more
      convenient and typically results in terser code, but makes its reactive
      dependencies less explicit.
    </li>
  </ul>
</template>
