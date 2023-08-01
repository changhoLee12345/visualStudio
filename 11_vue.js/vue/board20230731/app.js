import router from './router/router.js';

const template = `
<div>
  <h3>boardList</h3>
  <router-view></router-view>
</div>
`;

new Vue({
  el: '#app',
  template,
  router,
  created: function () {
    this.$router.push({
      name: 'boardList'
    });
  }
})