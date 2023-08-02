<template>
  <div>
    <table id="list">
      <tr>
        <th style="width: 50px;">글번호</th>
        <td>{{item.no}}</td>
        <th style="width: 50px;">조회수</th>
        <td>{{item.view}}</td>
      </tr>
      <tr>
        <th style="width: 50px;">글제목</th>
        <td colspan="3">{{item.title}}</td>
      </tr>
      <tr style="height: 50px;">
        <td colspan="4">{{item.content}}</td>
      </tr>
    </table>
    <router-link tag="button" style="float: right;" v-bind:to="{name: 'BoardList'}">목록</router-link>
  </div>
</template>

<script>
  export default {
    data: function () {
        return {
            item: {}
        }
    },
    created: function () {
      let dataList = this.$parent.getParentData();
      //this.$parent.dataArray.board; // {'board': []} 
      let no = this.$route.params.item.no;
      let view = this.$route.params.item.view;

      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].no == no) {
            this.item = this.$route.params.item;
          dataList[i].view = parseInt(view) + 1;
        }
      }
      this.$parent.setParentData(dataList);
    }
  }
</script>