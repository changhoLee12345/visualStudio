export default {
    template: `
    <div>
        <h2 style="margin:5px">My To Do List</h2>
        <input type="text" placeholder="Title..." v-model="todo">
        <input type="text" placeholder="DueDate..." v-model="dueDate">
        <span v-on:click="newElement" class="addBtn">Add</span>
    </div>`,
    data: function () {
        return {
            todo: '테스트하기1',
            dueDate: '2023-11-01'
        }
    },
    methods: {
        newElement: function () {
            this.$emit('add-component', this.todo, this.dueDate)
        }
    }
}