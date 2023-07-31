import BookList from '../component/bookList.js';
import BookRead from '../component/bookRead.js';
import BookWrite from '../component/bookWrite.js';

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/bookList',
        name: 'bookList',
        component: BookList
    }, {
        path: '/bookRead',
        name: 'bookRead',
        component: BookRead
    }, {
        path: '/bookWrite',
        name: 'bookWrite',
        component: BookWrite
    }, {
        path: '/',
        name: '*',
        component: BookList
    }]
})