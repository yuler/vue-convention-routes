import {createApp} from 'vue'
import {createRouter, createWebHistory, RouteRecord} from 'vue-router'

import App from './App.vue'

const routes: RouteRecord[] = []

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

router.addRoute({
  name: 'Home',
  path: '/',
  component: () => import('@/pages/Home.vue'),
})

router.addRoute({
  name: 'Add',
  path: '/add',
  component: () => import('@/pages/Add.vue'),
})

app.use(router)
app.mount('#app')
