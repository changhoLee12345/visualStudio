// router.js
import header from '../components/todoHeader.js'
import items from '../components/selectItems.js'

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'items',
        component: {
            header,
            items
        }
    }]
})