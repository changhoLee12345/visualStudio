import About from '../components/about.js';
import Home from '../components/home.js';
import Contact from '../components/contact.js';
import ContactByNo from '../components/contactByNo.js';

const router = new VueRouter({
  routes: [{
      mode: 'history',
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact,
      children: [{
        path: ':no',
        component: ContactByNo
      }]
      // },
      // {
      //   path: '/contact/:no',
      //   component: ContactByNo
    }
  ]
})

export default router;

// export default {
//   name: 'app',
//   template,
//   router
// }