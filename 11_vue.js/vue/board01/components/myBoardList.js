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
                            <td v-on:click="boardRead(item)">{{ item.title }}</td>
                            <td>{{ item.view }}</td>
                            <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
                        </tr>
                    </table>
                    <button style="float:right;" v-on:click="boardWrite">글쓰기</button>
                </div>`,
    props: ['object'],
    methods: {
        boardRead: function (info) {
            this.$emit('board-read', info);
        },
        boardDelete: function (no) {
            this.$emit('board-delete', no);
        },
        boardWrite: function () {
            this.$emit('board-write');
        }
    }
}