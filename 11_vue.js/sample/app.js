// app.js
import header from './components/todoHeader.js'
import items from './components/selectItems.js'
import router from './router/router.js'

let template = `
<div>
    <my-header v-on:add-item="addItem"></my-header>
    <my-item v-bind:items="itemList" v-on:sel-item="seleteItem" v-on:del-item="deleteItem"></my-item>
    <router-view></router-view>
</div>
`;

new Vue({
    el: '#app',
    template,
    components: {
        'my-header': header,
        'my-item': items
    },
    router,
    data: {
        itemList: []
    },
    methods: {
        addItem: function (title) {
            let newId = this.itemList[this.itemList.length - 1].id + 1;
            let newItem = {
                id: newId,
                title: title,
                attr: false
            }
            this.itemList.push(newItem);
        },
        seleteItem: function (id) {
            this.itemList.forEach((item, idx) => {
                if (item.id == id) {
                    let newItem = {
                        id: item.id,
                        title: item.title,
                        attr: !item.attr
                    }
                    this.itemList.splice(idx, 1, newItem);
                }
            })
        },
        deleteItem: function (id) {
            this.itemList.forEach((item, idx) => {
                if (item.id == id) {
                    this.itemList.splice(idx, 1);
                }
            })
        },
    },
    created: function () {
        fetch('data.json')
            .then(response => response.json())
            .then(json => {
                this.itemList = json;
            })
            .catch(err => console.log)
    }
})