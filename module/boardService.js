export default {
    get: function (url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                callback(json);
            })
            .catch(err => console.log);
    }
}