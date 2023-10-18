// app.js

import headerComponent from './components/header.js'
import listComponent from './components/list.js'

const template = `
<div>
  <h3>component 실습.</h3>
  <header-component v-if="headerOK" v-on:add-component="addTodo"></header-component>
  <list-component v-if="listOK" v-bind:todos="todolist" 
                  v-on:my-check="checkEvent" v-on:my-delete="deleteEvent" v-on:show-header="showHeader">
  </list-component>
</div>
`;

new Vue({
    el: '#app',
    template,
    data: {
        headerOK: false,
        listOK: false,
        todolist: []
    },
    components: {
        'header-component': headerComponent,
        'list-component': listComponent
    },
    methods: {
        checkEvent(no) {
            this.todolist = this.todolist.filter(todo => {
                if (todo.no == no) {
                    todo.checked = !todo.checked;
                }
                return true;
            })
        },
        deleteEvent(no) {
            this.todolist = this.todolist.filter(todo => {
                if (todo.no == no) {
                    return false;
                }
                return true;
            })
        },
        showHeader() {
            this.listOK = false;
            this.headerOK = true;
        },
        addTodo(todo, dueDate) {
            let no = 1;
            if (this.todolist.length > 0) {
                let idx = this.todolist.length - 1;
                no = Number(this.todolist[idx].no) + 1;
            }
            let checked = false;
            this.todolist.push({
                no,
                todo,
                dueDate,
                checked
            })
            this.headerOK = false;
            this.listOK = true;
        }
    },
    created: function () {
        fetch('./data/todo.json')
            .then(resolve => resolve.json())
            .then(result => {
                console.log(result.todo);
                this.todolist = result.todo;
                this.listOK = true;
            })
            .catch(err => {
                console.log('parsing error: ', err)
            })
    },
    updated: function () {
        console.log('updated')
    }
})