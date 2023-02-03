<template>
  <h1>Lifecycle Hook</h1>
  <img id="lifecycle" src="https://vuejs.org/assets/lifecycle.16e4c08e.png" />
  <h2>Lifecycle Hooks Summary</h2>
  <ul>
    <li>
      <code>beforeCreate</code> and <code>created</code> are called during the
      <code>&lt;script setup&gt;</code> process and can not be manually called.
    </li>
    <li>
      <code>beforeMount</code> registers a hook to be called right before the
      component is to be mounted. No DOM nodes have been created and the
      component is about to execute the first DOM render effect.
    </li>
    <li>
      <code>mounted</code> registers a callback to be called after the component
      has been mounted. DOM nodes have been created and all child components
      have been mounted as well.
    </li>
    <li>
      <code>updated</code> registers a callback to be called after the component
      has updated its DOM tree due to a reactive state change. This hook is
      called after any DOM update of the component, which can be caused by
      different state changes. <strong>NOTE:</strong> Do not change your
      component's state in this lifecycle hook or you'll cause an infinite
      update loop!
    </li>
    <li>
      <code>unmounted</code> registers a callback to be called after the
      component has been unmounted. All child components have been unmounted and
      all reactive effects have been stopped. Typically this is used to cleanup
      things like timers, DOM event listeners, or server connections.
    </li>
    <li>
      <code>beforeUnmount</code> registers a callback right before
      <code>unmounted</code>. The componnent instance is still fully functional.
    </li>
  </ul>
  <h2>Registering Lifecycle Hooks</h2>
  <p>
    To register a lifecycle hook you'll need to include the hook from
    <code>'vue'</code> and then create a function with the same name as the
    included hook. It will look something like this:
  </p>
  <img src="/hook.png" />
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log(`the component is now mounted.`);
});
</script>

<style scoped>
img#lifecycle {
  height: 100vh;
}
</style>
