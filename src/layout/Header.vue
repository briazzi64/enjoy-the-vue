<template>
  <header>
    <div class="leftHeader">
      <router-link :to="{ name: 'home' }">
        <img width="100" src="/insight.svg" alt="Insight logo" />
      </router-link>
      <nav>
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          :to="{ name: route.name }"
        >
          {{ route.meta.displayName }}
        </router-link>
      </nav>
    </div>
    <div v-if="currentRoute.meta.showUsername" class="rightHeader">
      {{
        userStore.userIsLoggedIn
          ? `Welcome ${userStore.fullUserName}`
          : 'Please Log In'
      }}
    </div>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../store';

const userStore = useUserStore();

const currentRoute = useRoute();
const router = useRouter();
const routes = router.getRoutes().filter((route) => route.name !== 'home');
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  background-color: #f7f6f5;
  height: 60px;
  justify-content: space-between;
  padding: 0 15px;
}
nav {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
nav a {
  line-height: 60px;
  padding: 0 10px;
}
nav a:hover,
nav a.router-link-active {
  background-color: #ccc;
  text-decoration: none;
}
.leftHeader {
  display: flex;
}
</style>
