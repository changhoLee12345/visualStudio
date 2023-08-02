<template>
  <div>
    <table id="list">
      <tbody>
        <tr>
          <td>글제목</td>
          <td><input type="text" style="width:90%" v-model="title"></td>
        </tr>
        <tr>
          <td colspan="2">
            <textarea cols="30" rows="3" style="width: 100%" v-model="content"></textarea>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="showList">목록</button>
    <button @click="saveBoard">저장</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      showList: function () {
        this.$router.push({
          'name': 'BoardList'
        })
      },
      saveBoard: function () {
        let dataList = this.$parent.getParentData();
        let no = 1;
        if (dataList.length != 0) {
          let idx = dataList.length - 1;
          no = parseInt(dataList[idx].no) + 1;
        }
        let board = {
          no,
          title: this.title,
          content: this.content,
          view: 0
        };
        dataList.push(board);

        // event 를 통해서 링크 실행.
        this.$router.push({
          name: 'BoardList'
        })
      }
    }
  }
</script>