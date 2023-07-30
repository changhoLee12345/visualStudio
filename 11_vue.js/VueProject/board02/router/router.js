import main from '../components/main.js'
import myBoardList from '../components/myBoardList.js'
import myBoardRead from '../components/myBoardRead.js'
import myBoardWrite from '../components/myBoardWrite.js'

export default new VueRouter({
    mode: 'history',
    routes: [
        //main
        {
            path: '/',
            name: 'main',
            component: main
        },
        //boardList
        {
            path: '/boardList',
            name: 'boardList',
            component: myBoardList
        },
        //boardRead
        {
            path: '/boardRead/:title',
            name: 'boardRead',
            component: myBoardRead,
            props: true
        },
        //boardWrite
        {
            path: '/boardWrite',
            name: 'boardWrite',
            component: myBoardWrite
        },
        //default
        {
            path: '*',
            redirect: '/'
        }
    ]
})