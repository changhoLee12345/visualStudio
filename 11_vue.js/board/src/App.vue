<template>
  <div id="app">
    <head-component v-bind:parentData.sync="this.$data"></head-component>
    <router-view />
  </div>
</template>

<script>
  import HeadComponent from '@/components/BoardHead';

  export default {
    name: 'App',
    components: {
      HeadComponent
    },
    data: function () {
      return {
        dataArray: {}, // {board: [{},{},{}]}
      }
    },
    methods: {
      getParentData: function () {
        return this.dataArray['board'];
      },
      setParentData: function (boards) {
        this.dataArray['board'] = boards;
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>