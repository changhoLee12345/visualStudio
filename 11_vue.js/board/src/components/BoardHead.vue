<template>
  <div>
    <h3>게시판</h3>
    <p>json 파일 열기</p>
    <input type="file" @change="loadData">
  </div>
</template>

<script>
  export default {
    name: 'head-component',
    props: ['parentData'],
    methods: {
      loadData: function (event) {
        // let file = event.target.files[0].name;
        let url = '/static/board.json';

        fetch(url)
          .then(response => response.json())
          .then(json => {
            this.parentData.dataArray = json;

            // this.$emit('update:parentData', this.parentData);
            this.$parent.setParentData(json.board);
            // router-link 호출.
            this.$router.push("/boardList");
          })
          .catch(err => console.log(err));
      }
    }
  }
</script>