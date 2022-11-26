export default {
    template : `<div>
                    <table id="list">
                        <tr>
                            <td>글제목</td>
                            <td><input type="text" style="width:90%; " v-model="title"></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <textarea style="width:100%;" v-model="content"></textarea>
                            </td>
                        </tr>     
                    </table>
                    <router-link tag="button" 
                                 style="float:right;" 
                                 v-bind:to="{ name : 'boardList'}">목록</router-link>
                    <button style="float:right;" v-on:click="boardSave">저장</button>
                </div>`,
    data : function(){
        return {
            title : '',
            content : ''
        }
    },
    methods : {
        boardSave : function(){
            let boardInfo = {
                'id' : 2,
                'title' : this.title,
                'post' : this.content
            }

            const VueObject = this;

            $.ajax({
                url : 'http://192.168.0.2:8081/myserver/boardInsert',
                type : 'post',
                data : boardInfo,
                dataType : 'json',
                success : function(data){
                    if(data != null){
                        VueObject.$router.push({ name : 'boardList'});
                    }else{
                        alert("정상적으로 등록되지 않았습니다.");
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })      

        }
    }
}