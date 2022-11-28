import empRead from '../components/empRead.js'
import { empSelect } from '../components/empSelect.js'
import empWrite from '../components/empWrite.js'

export default new VueRouter({
    mode : 'history',
    routes : [
        //전체조회
        {
            path : '/',
            name : 'empSelect',
            component : empSelect
        },
        //읽기
        {
            path : '/empRead/:empId',
            name : 'empRead',
            component : empRead,
            props : true
        },
        //쓰기 혹은 수정
        {
            path : '/empWrite/:empId',
            name : 'empWrite',
            component : empWrite,
            props : true
        },
        //기타
        {
            path : '*',
            redirect : '/'
        }
    ]
})