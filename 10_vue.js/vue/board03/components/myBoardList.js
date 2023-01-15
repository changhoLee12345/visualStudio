export default {
    template: `<div>
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
                                         v-bind:to="{ name : 'boardRead', params : { 'item' : item }}">
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
        const vueObject = this;
        $.ajax({
            url: 'http://192.168.0.2:8081/myserver/boardList',
            type: 'get',
            data: {
                'id': 2
            },
            dataType: 'json',
            success: function (data) {
                vueObject.object = data;
            },
            error: function (reject) {
                console.log(reject);
            }
        })
    },
    methods: {
        boardDelete: function (no) {
            let index = 0;
            for (let i = 0; i < this.object.length; i++) {
                if (this.object[i].no == no) {
                    index = i;
                    break;
                }
            }

            const VueObject = this;

            $.ajax({
                url: 'http://192.168.0.2:8081/myserver/boardDelete',
                type: 'post',
                data: {
                    'id': 2,
                    'no': no
                },
                dataType: 'json',
                success: function (data) {
                    if (data != null) {
                        VueObject.object.splice(index, 1);
                    } else {
                        alert('정상적으로 삭제되지 않았습니다.');
                    }
                },
                error: function (reject) {
                    console.log(reject);
                }
            })
        }
    }
}