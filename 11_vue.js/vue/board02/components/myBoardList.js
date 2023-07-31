import eventBus from './eventBus.js';

export default {
    template: ` <div>
                    <table id="list">
                        <!-- HEADER -->
                        <tr>
                            <th style="width:50px;">글번호</th>
                            <th>글제목</th>
                            <th style="width:50px;">조회수</th>
                            <th style="width:70px;"></th>
                        </tr>
                        <!-- DATA LIST -->
                        <tr v-for="item in object" v-bind:key="item.no">
                            <td>{{ item.no }}</td>
                            <router-link tag="td"
                                         v-bind:to="{ name : 'boardRead', params : { 'item' : item, 'title': item.title }}">
                                         {{ item.title }}</router-link>
                            <td>{{ item.view }}</td>
                            <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
                        </tr>
                    </table>
                    <router-link tag="button" 
                                 style="float:right;" 
                                 v-bind:to="{ name : 'boardWrite'}">글쓰기</router-link>
                </div>`,
    data: function () {
        return {
            object: []
        }
    },
    created: function () {
        eventBus.$on('add-count', this.addCount);
        this.object = this.$parent.getParentData();
    },
    methods: {
        boardDelete: function (no) {
            for (let i = 0; i < this.object.length; i++) {
                if (this.object[i].no == no) {
                    this.object.splice(i, 1);
                }
            }
            this.$parent.setParentData(this.object);
        },
        addCount: function (no, view) {
            //해당 글 조회수 증가
            for (let i = 0; i < this.object.length; i++) {
                if (this.object[i].no == no) {
                    this.object[i].view = parseInt(view) + 1;
                }
            }
        }
    }
}