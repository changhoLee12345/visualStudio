import router from './router/router.js'

const template = `
  <div id="app">
    <router-view/>
  </div>
`
new Vue({
  el: '#app',
  template,
  router
})