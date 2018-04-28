<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>Menu</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/items">Todo List</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from './components/AppHeader.vue'

export default Vue.extend({
  name: 'app',
  data() {
    return {
      title: 'To-Do',
    }
  },
  components: {
    AppHeader,
  },
})
</script>

<style>
h1 {
  color: blue;
}
</style>
