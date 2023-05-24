import empHeader from './components/empHeader.js'
import router from './router/router.js'

let template = `
<div>
    <emp-header></emp-header>
    <router-view></router-view>
</div>`

new Vue({
    el : '#app',
    template,   // template : template
    components : {
        empHeader   // empHeader : empHeader
    },
    router  // router : router
})