import main from '../components/main.js'
import myBoardList from '../components/myBoardList.js'
import myBoardRead from '../components/myBoardRead.js'
import myBoardWrite from '../components/myBoardWrite.js'

export default new VueRouter({
    mode : 'history',
    routes : [
        //boardList
        {
            path : '/boardList',
            name : 'boardList',
            component : myBoardList
        },
        //boardRead
        {
            path : '/boardRead/:item',
            name : 'boardRead',
            component : myBoardRead,
            props : true
        },
        //boardWrite
        {
            path : '/boardWrite',
            name : 'boardWrite',
            component : myBoardWrite
        },
        //default
        {
            path : '*',
            redirect : '/boardList'
        }
    ]
})