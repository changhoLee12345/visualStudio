let template = `
<div>
    <form id="info" onsubmit="return false">
        <template v-for="info in infos">
            <div>
                <label v-bind:for="info">{{ info }}</label>
                <input type="text" v-bind:id="info" 
                                   v-bind:name="info" v-model="empInfo[info]">
            </div>
        </template>
    </form>
    <div>
        <button v-on:click="updateMode ? updateContent() : uploadContent() ">저장</button>
        <router-link tag="button" v-bind:to="{ name : 'empSelect' }">취소</router-link>
    </div>
</div>
`

export default {
    template,
    props : ['empId'],
    data : function(){
        return {
            infos : ['employee_id', 'first_name', 'last_name', 'email', 'job_id'],
            //등록시 필요한 정보
            empInfo : {
                employee_id : '',
                first_name : '',
                last_name : '',
                email : '',
                job_id : ''
            },
            //모드 전환용 정보
            updateMode : false
        }
    },
    created : function(){
        if(this.empId > 0){
            
            const component = this;

            $.ajax({
                url : 'http://192.168.0.2:8081/myserver/empFind',
                type : 'get',
                data : { employee_id : component.empId },
                dataType : 'json',
                success : function(data){
                    if(data != null){
                        component.empInfo = data;
                        component.updateMode = true;
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })
        }
    },
    methods : {
        uploadContent : function(){
            const component = this;

            $.ajax({
                url : 'http://192.168.0.2:8081/myserver/empInsert',
                type : 'post',
                data : component.empInfo,
                dataType : 'json',
                success : function(data){
                    if(data != null){
                        component.$router.push({ name : 'empSelect'});
                    }else{
                        alert('정상적으로 등록되지 않았습니다.');
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })
        },
        updateContent : function(){
            const component = this;

            $.ajax({
                url : 'http://192.168.0.2:8081/myserver/empUpdate',
                type : 'post',
                data : component.empInfo,
                dataType : 'json',
                success : function(data){
                    if(data != null){
                        component.$router.push({ name : 'empSelect'});
                    }else{
                        alert('정상적으로 수정되지 않았습니다.');
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            })
        }
    }
}