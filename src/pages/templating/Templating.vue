<template>
  <h1>Templating</h1>
  <p>
    Vue uses an HTML-based template syntax that allows you to declaratively bind
    the rendered DOM to the underlying component instance's data. All Vue
    templates are syntactically valid HTML that can be parsed by spec-compliant
    browsers and HTML parsers. For those that have used
    <a href="https://mustache.github.io/" target="_blank">Mustache templates</a>
    before, you'll recognize the similarities immediately. Under the hood, Vue
    compiles the templates into highly-optimized JavaScript code. Combined with
    the reactivity system, Vue can intelligently figure out the minimal number
    of components to re-render and apply the minimal amount of DOM manipulations
    when the app state changes.
  </p>
  <p>
    <strong>Note:</strong> If you are familiar with Virtual DOM concepts and
    prefer the raw power of JavaScript, you can also directly write render
    functions instead of templates, with optional JSX support. However, do note
    that they do not enjoy the same level of compile-time optimizations as
    templates. I would strongly suggest you stick to Vue's templating engine
    instead of using JSX.
  </p>
  <p>
    Below are the most important things to know about the templating engine.
  </p>
  <div class="tab-container">
    <div class="tab-navigation">
      <div class="sticky">
        <button
          v-for="(component, index) in components"
          :key="component"
          :class="['tab-button', { active: currentComponent === index }]"
          @click="currentComponent = index"
        >
          {{ component.displayName }}
        </button>
      </div>
    </div>
    <div class="tab-content">
      <component :is="components[currentComponent].componentName" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TextInterpolation from './components/TextInterpolation.vue';
import AttributeBinding from './components/AttributeBinding.vue';
import JavaScriptExpressions from './components/JavaScriptExpressions.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import RenderingLoops from './components/RenderingLoops.vue';
import EventBinding from './components/EventBinding.vue';
import VModel from './components/VModel.vue';

const currentComponent = ref(0);
const components = [
  {
    displayName: 'Text Interpolation',
    componentName: TextInterpolation
  },
  {
    displayName: 'Attribute Binding',
    componentName: AttributeBinding
  },
  {
    displayName: 'JavaScript Expressions',
    componentName: JavaScriptExpressions
  },
  {
    displayName: 'Conditional Rendering',
    componentName: ConditionalRendering
  },
  {
    displayName: 'Rendering Loops',
    componentName: RenderingLoops
  },
  {
    displayName: 'Event Binding',
    componentName: EventBinding
  },
  {
    displayName: 'v-model',
    componentName: VModel
  }
];
</script>
