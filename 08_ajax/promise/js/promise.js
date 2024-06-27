/*
 * promise.js
 */
async function promiseFunc() {

    const promise = await new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        // req.open('get', './myLittleVader.jpg');
        req.open('get', 'data.json');
        req.send();
        req.responseType = 'json'; //'blob';
        req.onreadystatechange = function () {
            console.log('onreadystatechange: ', req.status, req.readyState)
        }
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(new Error('error occurred' + req.status))
            }
        }
        req.onerror = function () {
            reject(new Error('cannot call'))
        }
    });

    promise.forEach(item => {
        let p = document.createElement('p');
        p.innerHTML = item.job + ', ' + item.hour;
        show.appendChild(p);
    })
}
promiseFunc();

/* */
// promise
//     .then(resolve => {
//         // let imgUrl = URL.createObjectURL(resolve);
//         // document.querySelector('img').setAttribute('src', imgUrl);
//         console.log('result:', resolve);
//     })
//     .catch(reject => {
//         console.log('catch:', reject);
//     })