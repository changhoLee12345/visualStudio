// todoHeader.js
let template = `
<div id="myDIV" class="header">
  <h2 style="margin:5px">My To Do List</h2>
  <input type="text" v-model="newItem" id="myInput" placeholder="Title...">
  <span v-on:click="addItemChild" class="addBtn">Add</span>
  <router-link v-bind:to="{'name': 'items'}">글목록</router-link>
</div>
`;

export default {
	template,
	data: function () {
		return {
			newItem: ''
		}
	},
	methods: {
		addItemChild: function () {
			// let newId = this.$parent.$data.itemList[this.$parent.$data.itemList.length - 1].id + 1;
			// let newItem = {
			// 	id: newId,
			// 	title: this.newItem,
			// 	attr: false
			// }
			// this.$emit('add-item', newItem)
			this.$emit('add-item', this.newItem)
		}
	}
}