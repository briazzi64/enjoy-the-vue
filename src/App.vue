<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
</script>

<style>
#app {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  padding: 20px;
  flex: 1;
}
code {
  background-color: #eee;
  padding: 5px 8px;
  border-radius: 4px;
  transition: color 0.5s, background-color 0.5s;
}
.tab-container {
  display: flex;
  justify-content: flex-start;
  border: 1px solid #ccc;
}
.tab-navigation {
  flex: 0 0 200px;
  background-color: #ae0a46;
}
.sticky {
  position: sticky;
  top: 0;
}
.tab-button {
  border-radius: 0;
  width: 100%;
  text-align: left;
}
.tab-button:hover,
.tab-button.active {
  background: #7e0733;
}
.tab-content {
  padding: 0 20px 20px 20px;
}
</style>
