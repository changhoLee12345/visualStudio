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
      </tbody>
    </table>
    <router-link tag="button" style="float: right;" v-bind:to="{name: 'BoardWrite'}">글쓰기</router-link>
  </div>

</template>

<script>
  export default {

  }
</script>