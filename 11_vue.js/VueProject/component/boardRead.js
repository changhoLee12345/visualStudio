import eventBus from './eventBus.js';

export default {
    template: `<div>
                    <table id="list">
                        <tr>
                            <td style="width:50px;">글제목</td>
                            <td>{{ item.title }}</td>
                        </tr>
                        <tr style="height:300px;">
                            <td colspan="2">{{ item.content }}</td>
                        </tr>
                    </table>
                    <router-link tag="button" 
                                 style="float:right;"
                                 v-bind:to="{ name : 'boardList' }">목록</router-link>
                </div>`,
    props: ['item'],
    methods: {

    },
    created: function () {
        eventBus.$emit('add-count', this.item.no);
        console.log('item', this.item)
    }
}