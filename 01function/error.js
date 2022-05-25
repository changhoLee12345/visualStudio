// 

function chooseFile() {

    let data = '';
    let fname = document.getElementById('selectFile');

    try {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            data = reader.result;
            console.log('파일내용: ' + reader.result);
        })
        reader.addEventListener('error', function () {
            throw '파일 읽기 에러';
        })
        fname.addEventListener('change', function () {
            reader.readAsText(fname.files[0], 'utf-8');
        })
    } catch (err) {
        console.log(err.message);
    }
}