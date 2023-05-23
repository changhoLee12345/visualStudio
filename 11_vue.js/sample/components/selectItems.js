// selectItems.js

let template = `
<ul id="myUL">
  <li v-for="(item, attr) in items" v-on:click="itemClick(item.id, item.attr)" v-bind:class="{'checked': item.attr}" v-bind:rid="item.id">
    {{item.title}}
    <span class='close' v-on:click.stop="deleteRow(item.id)">{{'\u00D7'}}</span>
  </li>
</ul>
`;

export default {
    template,
    props: ['items'],
    data: function () {
        return {}
    },
    methods: {
        itemClick: function (id) {
            // this.$parent.$data.itemList.forEach((item, idx) => {
            //     if (item.id == id) {
            //         let newItem = {
            //             id: item.id,
            //             title: item.title,
            //             attr: !attr
            //         }
            //         this.$parent.$data.itemList.splice(idx, 1, newItem);
            //     }
            // })
            // 하위요소에서 처리하지 말고 상위컴포넌트에서 처리하도록 수정.
            this.$emit('sel-item', id)
        },
        deleteRow: function (id) {
            this.$emit('del-item', id);
        },
    }
}