import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import CreatingApp from './pages/creatingApp/CreatingApp.vue';
import Templating from './pages/templating/Templating.vue';
import Components from './pages/components/Components.vue';
import Lifecycle from './pages/lifecycle/Lifecycle.vue';
import TodoComponent from './pages/todoComponent/TodoComponent.vue';
import StoreComponent from './pages/storeComponent/StoreComponent.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/create',
    name: 'create',
    component: CreatingApp,
    meta: {
      displayName: 'Vue App'
    }
  },
  {
    path: '/templating',
    name: 'templating',
    component: Templating,
    meta: {
      displayName: 'Templating'
    }
  },
  {
    path: '/components',
    name: 'components',
    component: Components,
    meta: {
      displayName: 'Components'
    }
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: Lifecycle,
    meta: {
      displayName: 'Lifecycle'
    }
  },
  {
    path: '/todoComponent',
    name: 'todoComponent',
    component: TodoComponent,
    meta: {
      displayName: 'Todos'
    }
  },
  {
    path: '/storeComponent',
    name: 'storeComponent',
    component: StoreComponent,
    meta: {
      displayName: 'Pinia Store',
      showUsername: true
    }
  }
];

export default createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes
});
