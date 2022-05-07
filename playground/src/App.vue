<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()

function onClick() {
  // TODO:
  console.log('onClick')
}
</script>

<template>
  <h1>App</h1>

  <div>
    <h2>Routes Length: {{ routes.length }}</h2>
    <ul v-for="route in routes" key="route">
      <li>{{ route }}</li>
    </ul>
  </div>

  <button @click="onClick">Click</button>

  <br /><br /><br /><br />
  <RouterView />
</template>
