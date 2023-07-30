import myHeader from './components/header.js'
import router from './router/router.js'

let template = `
<div>
    <my-header v-bind:parentData.sync="this.$data"></my-header>
    <router-view></router-view>
</div>`

var vm = new Vue({
    el: '#app',
    template: template,
    data: {
        dataArray: {}
    },
    components: {
        myHeader // myHeader : myHeader -> 'my-header' : myHeader
    },
    // methods: {
    //     getParentData: function () {
    //         return this.dataArray['board'];
    //     },
    //     setParentData: function (dataList) {
    //         this.dataArray['board'] = dataList;
    //     }
    // },
    router // router : router
})
// console.log('this.$data== ', vm.$data)