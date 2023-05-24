import router from './router/router.js'

let template = `
<div>
    <router-view></router-view>
</div>`

new Vue({
    el : '#app',
    template : template,
    router  // router : router
})