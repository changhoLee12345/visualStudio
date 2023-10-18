export default {
  template: `
    <div>
      <ul id="myUL">
        <li v-for="doing in todos" v-bind:class="{'checked': doing.checked}" 
            v-on:click="checkEvent(doing.no)" v-bind:data-no="doing.no">
          할일:  {{doing.todo}} DueDate: {{doing.dueDate}}
          <span v-on:click.stop="deleteTodo(doing.no)" class="close">X</span>
        </li>
      </ul>
      <button v-on:click="showHeader" class="addBtn">등록</button>
    </div>`,
  props: ['todos'],
  methods: {
    checkEvent: function (no) {
      this.$emit('my-check', no);
    },
    deleteTodo(no) {
      this.$emit('my-delete', no);
    },
    showHeader() {
      this.$emit('show-header');
    }
  }
}