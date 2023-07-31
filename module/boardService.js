export default {
    get: function (url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                callback(json);
            })
            .catch(err => console.log);
    },
    post: function (url, callback, param) {
        fetch(url, {
                method: 'post',
                body: '',
                headers: {
                    'Content-Type': 'application/w-xxx-form-urlencoded'
                }
            })
            .then(response => response.json())
            .then(json => {
                callback(json);
            })
            .catch(err => console.log)
    }
}