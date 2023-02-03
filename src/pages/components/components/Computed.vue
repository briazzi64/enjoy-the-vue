<template>
  <h2>Computed Properties</h2>
  <p>
    In-template expressions are very convenient, but they are meant for simple
    operations. Putting too much logic in your templates can make them bloated
    and hard to maintain. We also don't want to have to repeat template logic in
    multiple places if we can make something that allows us to reuse said logic.
    That's why for complex logic that includes reactive data, it is recommended
    to use a <strong>computed</strong> property.
  </p>
  <p>Computed properties are good for two big reasons.</p>
  <p>
    First, a computed property automatically tracks its reactive dependencies.
    The
    <code>computed()</code> function expects to be passed a getter function, and
    the returned value is a computed ref.
  </p>
  <p>
    Second, computed properties are cached based on their reactive dependencies.
    A computed property will only re-evaluate when some of its reactive
    dependencies have changed. Why do we need caching? Imagine we have an
    expensive computed property <code>list</code>, which requires looping
    through a huge array and doing a lot of computations. Then we may have other
    computed properties that in turn depend on <code>list</code>. Without
    caching, we would be executing <code>list</code>'s getter many more times
    than necessary! In cases where you do not want caching, use a method call
    instead.
  </p>
  <h3>Creating a computed property</h3>
  <p>
    Simply include <code>computed</code> from <code>vue</code> and then create a
    variable you want to be a computed property. Make that variable equal to
    <code>computed()</code> and return whatever value you need to compute. It'll
    look something like this:
  </p>
  <code
    >const completedTodos = computed(() => data.value.filter(item = >
    item.completed)
  </code>
  <h3>Don't update your component's state!</h3>
  <p>
    It is important to remember that computed getter functions should only
    perform pure computation and be free of side effects. For example,
    <strong
      >don't make async requests or mutate the DOM inside a computed
      getter!</strong
    >
    Think of a computed property as declaratively describing how to derive a
    value based on other values - its only responsibility should be computing
    and returning that value.
  </p>
  <p>
    If you need to update multiple pieces of data on your component, you will
    want to look into using a watcher instead.
  </p>
</template>
