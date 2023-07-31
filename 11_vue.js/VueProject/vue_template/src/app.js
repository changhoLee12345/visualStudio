import router from './router/router.js';

const template = `
<div>
  <h3>boardList</h3>
  <ul>
    <li><router-link to="/bookList">list</router-link></li>
    <li><router-link to="/bookWrite">write</router-link></li>
  </ul>
  <router-view></router-view>
</div>
`;

new Vue({
    el:'#app',
    template,
    router
})