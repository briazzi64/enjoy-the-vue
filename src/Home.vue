<template>
  <div id="homePage">
    <div id="logo">
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" alt="Vue logo" />
      </a>
    </div>
    <div id="content">
      <h1>Introduction to Vue</h1>
      <p>
        Vue (pronounced like <b>view</b>) is a JavaScript framework for building
        user interfaces. It builds on top of standard HTML, CSS, and JavaScript
        and provides a declarative and component-based programming model that
        helps you efficiently develop user interfaces, be they simple or
        complex. If you have built with any modern JavaScript framework,
        especially React, then you'll be able to learn Vue quickly!
      </p>
      <p>
        This presentation covers Vue3 and the composition API. Support for Vue2
        ends on December 31st 2022 and therefore it is best to learn Vue3. Don't
        worry if you already know Vue2. Though there have been a lot of changes,
        if you are familiar with Vue2 then the transition to 3 will be easy!
      </p>
      <p>In this demo we'll cover the following items.</p>
      <ul>
        <li>Creating a Vue app</li>
        <li>Templating Syntax</li>
        <li>Component Basics</li>
        <li>Lifecycle Hooks</li>
        <li>Vue Router</li>
        <li>Pinia Store</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#homePage {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

#logo {
  flex: 0 1 300px;
}

#content {
  padding-left: 20px;
  flex: 1;
}

#logos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
