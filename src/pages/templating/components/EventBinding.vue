<template>
  <h2>Event Binding</h2>
  <p>
    Using <code>v-on</code> (or the shorthand <code>@</code>) we can attach an
    event to any element on the page. From there you can either handle your
    events inline or by passing a function. For example, you could do this to
    increase the <code>count</code> data by 1
  </p>
  <code v-pre>&lt;button @click="count++"&gt;{{ count }}&lt;/button&gt;</code>
  <p>Or this to call the <code>increment</code> function.</p>
  <code v-pre
    >&lt;button @click="increment()"&gt;{{ count }}&lt;/button&gt;</code
  >
  <p>
    Any standard JavaScript event like blur, focus, or click can be attached. Or
    if you create custom events for your Vue components they can be attached as
    well.
  </p>
  <h3>Event Modifiers</h3>
  <p>
    It is a very common need to call <code>event.preventDefault()</code> or
    <code>event.stopPropagation()</code>
    inside event handlers. Although we can do this easily inside functions, it
    would be better if the functions can be purely about data logic rather than
    having to deal with DOM event details. It also makes our unit testing a lot
    easier. To handle this, Vue provides the following modifiers that can be
    attached to any event.
  </p>
  <ul>
    <li><code>.stop</code></li>
    <li><code>.prevent</code></li>
    <li><code>.self</code></li>
    <li><code>.capture</code></li>
    <li><code>.once</code></li>
    <li><code>.passive</code></li>
  </ul>
  <p>
    A common example would be to <code>preventDefault()</code> on a form
    submitting so that we can use our own custom submit logic. That would look
    something like this:
  </p>
  <code v-pre>&lt;form @submit.prevent="handleSubmit()"&gt;</code>
</template>
