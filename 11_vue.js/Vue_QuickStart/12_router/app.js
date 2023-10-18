import router from './router/router.js';

const template = `
<div>
  <div class="header">
    <h1 class="headerText">(주)OpenSSG</h1>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
  <br>
  <div class="container">
    <router-view></router-view>
  </div>
</div>
`;

new Vue({
    el: '#app',
    template,
    router
})