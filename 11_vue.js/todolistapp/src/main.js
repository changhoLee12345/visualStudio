import {
    createApp,
    Vue
} from 'vue'
import App from './App.vue'
import TodoList from './components/TodoList.vue'

Vue.config.productionTip = false;

// createApp(App).mount('#app')
new Vue({
    render: h => h(TodoList)
}).$mount('#app')