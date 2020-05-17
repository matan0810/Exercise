<template>
  <div id="app">
    <Menu msg="Welcome to Your Vue.js App"/>
    <side-bar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    Menu,
    SideBar
  }
}
</script>

<style>
</style>
