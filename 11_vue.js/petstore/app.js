import router from './router/router.js'

const template = `
  <div class="app">
    <router-view/>
  </div>
`
new Vue({
  el: '#app',
  template,
  router
})