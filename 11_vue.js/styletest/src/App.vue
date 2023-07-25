<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <child1 />
    <child2 />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Child1 from './components/Child1.vue'
  import Child2 from './components/Child2.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Child1,
      Child2
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>