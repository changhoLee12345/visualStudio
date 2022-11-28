let template = `
<nav class="navbar bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" 
                 v-bind:to="{ 'name' : 'empSelect' }">
                 사원정보목록
    </router-link>
  </div>
</nav>`

export default {
    template // template : template
}