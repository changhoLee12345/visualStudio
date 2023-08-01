import Form from '../components/form.js'
import Main from '../components/main.js'
import Product from '../components/product.js'
import EditProduct from '../components/editProduct.js'

export default new VueRouter({
    // mode: 'history',
    routes: [{
        path: '/',
        name: 'iMain',
        component: Main,
        props: true
    }, {
        path: '/product/:id',
        name: 'Id',
        component: Product,
        props: true,
        children: [{
            path: 'edit',
            name: 'Edit',
            component: EditProduct,
            props: true
        }]
    }, {
        path: '/form',
        name: 'Form',
        component: Form,
        props: true
    }, {
        path: '*',
        redirect: '/'
    }]
})