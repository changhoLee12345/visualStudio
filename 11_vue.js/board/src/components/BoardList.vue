<template>
  <div>
    <table border="1" id="list">
      <thead>
        <tr>
          <th style="width:50px">글번호</th>
          <th>글제목</th>
          <th style="width:50px">조회수</th>
          <th style="width:50px">삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boards">
          <td>{{board.no}}</td>
          <router-link tag="td" v-bind:to="{name:'BoardRead', params:{'item':board, 'title': board.title}}">
            {{board.title}}</router-link>
          <td>{{board.view}}</td>
          <td><button @click="boardDelete(board.no)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <router-link tag="button" style="float: right;" v-bind:to="{name: 'BoardWrite'}">글쓰기</router-link>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        boards: []
      }
    },
    created: function () {
      let data = this.$parent.getParentData();
      this.boards = this.$parent.getParentData();
      // this.$router.go(this.$router.currentRoute)
    },
    methods: {
      boardDelete: function (no) {
        for (let i = 0; i < this.boards.length; i++) {
          if (this.boards[i].no == no) {
            this.boards.splice(i, 1);
          }
        }
        this.$parent.setParentData(this.boards);
      },
    }
  }
</script>