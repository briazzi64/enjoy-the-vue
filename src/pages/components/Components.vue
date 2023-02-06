<template>
  <h1>Vue Components</h1>
  <div class="tab-container">
    <div class="tab-navigation">
      <div class="sticky">
        <button
          v-for="(component, index) in components"
          :key="component"
          :class="['tab-button', { active: currentComponentIndex === index }]"
          @click="currentComponentIndex = index"
        >
          {{ component.displayName }}
        </button>
      </div>
    </div>
    <div class="tab-content">
      <component :is="components[currentComponentIndex].componentName" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Creating from './components/Creating.vue';
import Props from './components/Props.vue';
import Events from './components/Events.vue';
import Computed from './components/Computed.vue';
import Watchers from './components/Watchers.vue';
import Slots from './components/Slots.vue';
import Dynamic from './components/Dynamic.vue';

const currentComponentIndex = ref(0);
const components = [
  {
    displayName: 'Creating and Using Components',
    componentName: Creating
  },
  {
    displayName: 'Passing Props',
    componentName: Props
  },
  {
    displayName: 'Listening to Events',
    componentName: Events
  },
  {
    displayName: 'Computed Properties',
    componentName: Computed
  },
  {
    displayName: 'Watchers',
    componentName: Watchers
  },
  {
    displayName: 'Using Slots',
    componentName: Slots
  },
  {
    displayName: 'Dynamic Components',
    componentName: Dynamic
  }
];
</script>
