export default{
    template : `
    <header>
        <h2>간단한 게시판</h2>
        <p>게시판 데이터 json 파일 읽기</p>
        <input type="file" v-on:change="loadData($event)">
        <button v-on:click="saveBoardList">게시판 저장하기</button>
    </header>`,
    props : ['parentData'],
    methods : {
        loadData : function(event){ // 파일을 읽어들이는 메소드
            let file = event.target.files[0].name;
            if(file){
               fetch('/board02/data/'+file)
               .then(response => response.json())
               .then(data => {
                    this.parentData.dataArray = data;
                    if(this.parentData.dataArray != null && this.parentData.dataArray['board'].length > 0){
                        this.parentData.listOk = true;
                    }
                    this.$emit('update:parentData', this.parentData);
                    
                    this.$router.push({ name : 'boardList'});
                    
               }).catch(err => console.log(err));
            }
        },
        saveBoardList : function(){
            let data = this.parentData.dataArray;

            if(data.length == 0){
                alert('저장할 게시판 내용이 없습니다.');
                return;
            }

            if(typeof data === 'object'){
                data = JSON.stringify(data, undefined, 4);
            }

            let blob = new Blob([data], {type:'text/json'});
            let a = document.createElement('a');
            a.download='board.json';
            a.href = window.URL.createObjectURL(blob);
            a.click();
        }
    }
}