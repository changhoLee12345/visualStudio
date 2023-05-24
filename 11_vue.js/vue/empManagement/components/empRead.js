let template = `
<div>
    <div>
        <!-- 사원 상세 정보 -->
        <template v-for="info in infos">
            <div>
                <span>{{ info }}</span>
                <span>{{ empInfo[info] }}</sapn>
            </div>            
        </template>
    </div>
    <div>
        <!-- 버튼 / 수정 , 삭제 -->
        <router-link tag="button" v-bind:to="{ name : 'empWrite', 
                                               params : { empId : empInfo.employee_id }}">
            수정
        </router-link>
        <button v-on:click="deleteData">삭제</button>
    </div>
</div>`

export default {
    template,
    props: ['empId'],
    data: function () {
        return {
            infos: ['employee_id', 'first_name', 'last_name', 'email', 'job_id'],
            empInfo: {}
        }
    },
    created: function () {

        const vueObject = this;

        $.ajax({
            url: 'http://192.168.0.2:8081/myserver/empFind',
            type: 'get',
            data: {
                employee_id: vueObject.empId
            },
            dataType: 'json',
            success: function (data) {
                if (data != null) {
                    vueObject.empInfo = data;
                }
            },
            error: function (reject) {
                console.log(reject);
            }
        })
    },
    methods: {
        deleteData: function () {
            const vueObject = this;

            $.ajax({
                url: 'http://192.168.0.2:8081/myserver/empDelete',
                type: 'post',
                data: {
                    employee_id: vueObject.empId
                },
                dataType: 'json',
                success: function (data) {
                    if (data != null) {
                        vueObject.$router.push({
                            name: 'empSelect'
                        });
                    } else {
                        alert("정상적으로 삭제되지 않았습니다.");
                    }
                },
                error: function (reject) {
                    console.log(reject);
                }
            })
        }
    }
}