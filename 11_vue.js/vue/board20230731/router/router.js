import BoardList from '../component/boardList.js';
import BoardRead from '../component/boardRead.js';
import BoardWrite from '../component/boardWrite.js';

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/boardList',
        name: 'boardList',
        component: BoardList
    }, {
        path: '/boardRead/:title',
        name: 'boardRead',
        component: BoardRead,
        props: true
    }, {
        path: '/boardWrite',
        name: 'boardWrite',
        component: BoardWrite
    }, {
        path: '/',
        name: '*',
        component: BoardList
    }]
})